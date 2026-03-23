import { useEffect, useState } from "react";
import { useActor } from "../hooks/useActor";

const ADMIN_PASSWORD = "herrise2026";

type Member = { id: bigint; name: string; email: string; joinedAt: bigint };
type Subscriber = { id: bigint; email: string; subscribedAt: bigint };

function formatDate(ns: bigint) {
  return new Date(Number(ns / 1_000_000n)).toLocaleString();
}

export default function Admin() {
  const { actor } = useActor();
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [members, setMembers] = useState<Member[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [tab, setTab] = useState<"members" | "subscribers">("members");
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  useEffect(() => {
    if (!authed || !actor) return;
    setLoading(true);
    Promise.all([actor.getMembers(), actor.getSubscribers()])
      .then(([m, s]) => {
        setMembers(m as Member[]);
        setSubscribers(s as Subscriber[]);
      })
      .finally(() => setLoading(false));
  }, [authed, actor]);

  if (!authed) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[oklch(0.98_0.01_60)]">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm flex flex-col gap-5">
          <h1 className="font-serif text-2xl font-bold text-[oklch(0.25_0.01_60)] text-center">
            Admin Access
          </h1>
          <p className="text-sm text-[oklch(0.45_0.02_60)] text-center">
            Enter your admin password to view submissions.
          </p>
          <input
            type="password"
            className="border border-[oklch(0.85_0.04_20)] rounded-lg px-4 py-2 text-sm outline-none focus:border-[oklch(0.6_0.15_20)] transition"
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
          />
          {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          <button
            type="button"
            onClick={login}
            className="bg-[oklch(0.6_0.15_20)] hover:bg-[oklch(0.55_0.17_20)] text-white font-semibold rounded-lg py-2 text-sm transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] py-12 px-4 bg-[oklch(0.98_0.01_60)]">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl font-bold text-[oklch(0.25_0.01_60)] mb-2">
          Admin Dashboard
        </h1>
        <p className="text-sm text-[oklch(0.45_0.02_60)] mb-8">
          View all club signups and newsletter subscribers.
        </p>

        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => setTab("members")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              tab === "members"
                ? "bg-[oklch(0.6_0.15_20)] text-white"
                : "bg-white border border-[oklch(0.85_0.04_20)] text-[oklch(0.35_0.02_60)] hover:border-[oklch(0.6_0.15_20)]"
            }`}
          >
            Club Members ({members.length})
          </button>
          <button
            type="button"
            onClick={() => setTab("subscribers")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              tab === "subscribers"
                ? "bg-[oklch(0.6_0.15_20)] text-white"
                : "bg-white border border-[oklch(0.85_0.04_20)] text-[oklch(0.35_0.02_60)] hover:border-[oklch(0.6_0.15_20)]"
            }`}
          >
            Subscribers ({subscribers.length})
          </button>
        </div>

        {loading ? (
          <p className="text-[oklch(0.5_0.02_60)] text-sm">Loading...</p>
        ) : tab === "members" ? (
          members.length === 0 ? (
            <p className="text-[oklch(0.5_0.02_60)] text-sm">
              No club members yet.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-xl shadow">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-[oklch(0.95_0.03_20)] text-[oklch(0.3_0.02_60)]">
                    <th className="text-left px-5 py-3 font-semibold">#</th>
                    <th className="text-left px-5 py-3 font-semibold">Name</th>
                    <th className="text-left px-5 py-3 font-semibold">Email</th>
                    <th className="text-left px-5 py-3 font-semibold">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m, i) => (
                    <tr
                      key={String(m.id)}
                      className={
                        i % 2 === 0 ? "bg-white" : "bg-[oklch(0.985_0.005_60)]"
                      }
                    >
                      <td className="px-5 py-3 text-[oklch(0.55_0.02_60)]">
                        {i + 1}
                      </td>
                      <td className="px-5 py-3 font-medium text-[oklch(0.25_0.01_60)]">
                        {m.name}
                      </td>
                      <td className="px-5 py-3 text-[oklch(0.4_0.02_60)]">
                        {m.email}
                      </td>
                      <td className="px-5 py-3 text-[oklch(0.55_0.02_60)]">
                        {formatDate(m.joinedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ) : subscribers.length === 0 ? (
          <p className="text-[oklch(0.5_0.02_60)] text-sm">
            No subscribers yet.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-[oklch(0.95_0.03_20)] text-[oklch(0.3_0.02_60)]">
                  <th className="text-left px-5 py-3 font-semibold">#</th>
                  <th className="text-left px-5 py-3 font-semibold">Email</th>
                  <th className="text-left px-5 py-3 font-semibold">
                    Subscribed
                  </th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((s, i) => (
                  <tr
                    key={String(s.id)}
                    className={
                      i % 2 === 0 ? "bg-white" : "bg-[oklch(0.985_0.005_60)]"
                    }
                  >
                    <td className="px-5 py-3 text-[oklch(0.55_0.02_60)]">
                      {i + 1}
                    </td>
                    <td className="px-5 py-3 text-[oklch(0.4_0.02_60)]">
                      {s.email}
                    </td>
                    <td className="px-5 py-3 text-[oklch(0.55_0.02_60)]">
                      {formatDate(s.subscribedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
