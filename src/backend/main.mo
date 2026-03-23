import Time "mo:core/Time";
import Map "mo:core/Map";

actor {
  type ReportId = Nat;

  type Report = {
    id : ReportId;
    reportType : Text;
    description : Text;
    location : ?Text;
    submittedAt : Time.Time;
  };

  type Member = {
    id : Nat;
    name : Text;
    email : Text;
    joinedAt : Time.Time;
  };

  type Subscriber = {
    id : Nat;
    email : Text;
    subscribedAt : Time.Time;
  };

  let reports = Map.empty<ReportId, Report>();
  var nextId = 0;

  let members = Map.empty<Nat, Member>();
  var nextMemberId = 0;

  let subscribers = Map.empty<Nat, Subscriber>();
  var nextSubscriberId = 0;

  public shared func submitReport(reportType : Text, description : Text, location : ?Text) : async ReportId {
    let report : Report = {
      id = nextId;
      reportType;
      description;
      location;
      submittedAt = Time.now();
    };
    reports.add(nextId, report);
    nextId += 1;
    report.id;
  };

  public query func getAllReports() : async [Report] {
    reports.values().toArray();
  };

  public shared func joinClub(name : Text, email : Text) : async Nat {
    let member : Member = {
      id = nextMemberId;
      name;
      email;
      joinedAt = Time.now();
    };
    members.add(nextMemberId, member);
    nextMemberId += 1;
    member.id;
  };

  public shared func subscribe(email : Text) : async Nat {
    let sub : Subscriber = {
      id = nextSubscriberId;
      email;
      subscribedAt = Time.now();
    };
    subscribers.add(nextSubscriberId, sub);
    nextSubscriberId += 1;
    sub.id;
  };

  public query func getMembers() : async [Member] {
    members.values().toArray();
  };

  public query func getSubscribers() : async [Subscriber] {
    subscribers.values().toArray();
  };
};
