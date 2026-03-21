const NAV_ICONS = [
  { icon: "🏠", x: 92 },
  { icon: "🆘", x: 130 },
  { icon: "📝", x: 168 },
  { icon: "👤", x: 206 },
];

export default function PhoneMockup() {
  return (
    <svg
      viewBox="0 0 300 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs mx-auto"
      aria-hidden="true"
    >
      <ellipse cx="150" cy="468" rx="80" ry="10" fill="#D4B8E8" opacity="0.4" />
      <rect x="50" y="20" width="200" height="440" rx="30" fill="#2D1F50" />
      <rect x="60" y="35" width="180" height="410" rx="22" fill="#F4EFFA" />
      <rect x="110" y="35" width="80" height="22" rx="11" fill="#2D1F50" />
      <circle cx="158" cy="46" r="4" fill="#1A0E35" />
      <rect x="120" y="432" width="60" height="5" rx="2.5" fill="#D4B8E8" />

      <rect
        x="70"
        y="65"
        width="160"
        height="14"
        rx="3"
        fill="#7A4DB3"
        opacity="0.15"
      />

      <rect x="70" y="85" width="160" height="38" rx="8" fill="#7A4DB3" />
      <text
        x="92"
        y="109"
        fontSize="11"
        fontWeight="700"
        fill="white"
        fontFamily="sans-serif"
      >
        HER App
      </text>
      <circle cx="211" cy="104" r="10" fill="white" opacity="0.2" />
      <path
        d="M207 104 C207 101.2 209.2 99 212 99 C212 99 215 101.2 215 104 C215 106.8 212 109 212 109 C212 109 209 106.8 209 104 Z"
        fill="white"
        opacity="0.8"
      />

      <rect x="80" y="133" width="140" height="44" rx="10" fill="#D44A4A" />
      <text
        x="115"
        y="150"
        fontSize="9"
        fontWeight="700"
        fill="white"
        fontFamily="sans-serif"
      >
        🚨 EMERGENCY ALERT
      </text>
      <text
        x="122"
        y="165"
        fontSize="8"
        fill="white"
        opacity="0.85"
        fontFamily="sans-serif"
      >
        Tap to send GPS + alert
      </text>

      <rect x="80" y="187" width="140" height="58" rx="10" fill="white" />
      <rect
        x="80"
        y="187"
        width="140"
        height="58"
        rx="10"
        stroke="#EEE7F6"
        strokeWidth="1.5"
      />
      <circle cx="103" cy="208" r="10" fill="#EEE7F6" />
      <text x="99" y="212" fontSize="10" fill="#7A4DB3" fontFamily="sans-serif">
        📍
      </text>
      <rect x="120" y="200" width="80" height="8" rx="4" fill="#EEE7F6" />
      <rect x="120" y="214" width="55" height="6" rx="3" fill="#F4EFFA" />
      <rect x="120" y="226" width="65" height="6" rx="3" fill="#F4EFFA" />
      <text
        x="88"
        y="240"
        fontSize="7"
        fill="#3EACA8"
        fontFamily="sans-serif"
        fontWeight="600"
      >
        ● SAFE — Location Shared
      </text>

      <rect x="80" y="255" width="65" height="26" rx="13" fill="#EEE7F6" />
      <text x="92" y="272" fontSize="8" fill="#7A4DB3" fontFamily="sans-serif">
        📞 Helpline
      </text>
      <rect x="155" y="255" width="65" height="26" rx="13" fill="#F7DDE6" />
      <text x="163" y="272" fontSize="8" fill="#C8507A" fontFamily="sans-serif">
        📝 Report
      </text>

      <text
        x="88"
        y="298"
        fontSize="8"
        fontWeight="700"
        fill="#2D1F50"
        fontFamily="sans-serif"
      >
        Recent Activity
      </text>
      <g>
        <rect x="80" y="304" width="140" height="24" rx="6" fill="#F4EFFA" />
        <circle cx="93" cy="316" r="7" fill="#EEE7F6" />
        <rect x="108" y="309" width="80" height="5" rx="2.5" fill="#D4B8E8" />
        <rect x="108" y="318" width="55" height="4" rx="2" fill="#EEE7F6" />
      </g>
      <g transform="translate(0, 30)">
        <rect x="80" y="304" width="140" height="24" rx="6" fill="#F4EFFA" />
        <circle cx="93" cy="316" r="7" fill="#EEE7F6" />
        <rect x="108" y="309" width="80" height="5" rx="2.5" fill="#D4B8E8" />
        <rect x="108" y="318" width="55" height="4" rx="2" fill="#EEE7F6" />
      </g>
      <g transform="translate(0, 60)">
        <rect x="80" y="304" width="140" height="24" rx="6" fill="#F4EFFA" />
        <circle cx="93" cy="316" r="7" fill="#EEE7F6" />
        <rect x="108" y="309" width="80" height="5" rx="2.5" fill="#D4B8E8" />
        <rect x="108" y="318" width="55" height="4" rx="2" fill="#EEE7F6" />
      </g>

      <rect x="70" y="398" width="160" height="30" rx="8" fill="#F4EFFA" />
      {NAV_ICONS.map(({ icon, x }) => (
        <text key={icon} x={x} y="418" fontSize="12" fontFamily="sans-serif">
          {icon}
        </text>
      ))}

      <rect
        x="155"
        y="145"
        width="110"
        height="38"
        rx="8"
        fill="#2D1F50"
        opacity="0.9"
      />
      <text x="165" y="161" fontSize="8" fill="white" fontFamily="sans-serif">
        ✅ Alert sent to
      </text>
      <text x="165" y="174" fontSize="8" fill="#B896E0" fontFamily="sans-serif">
        3 trusted contacts
      </text>
    </svg>
  );
}
