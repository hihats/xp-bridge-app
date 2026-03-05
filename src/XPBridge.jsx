import { useState } from "react";

/* ─── Custom SVG Icons ─── */
const Icon = ({ children, size = 32, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", margin: "0 auto" }}
  >
    {children}
  </svg>
);

const icons = {
  // ── Values ──
  communication: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="3" y="6" width="16" height="12" rx="3" stroke={color} strokeWidth="1.8" fill="none" />
      <path d="M8 18 L6 23 L11 18" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <rect x="13" y="10" width="16" height="12" rx="3" stroke={color} strokeWidth="1.8" fill={`${color}18`} />
      <path d="M24 22 L26 27 L21 22" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <line x1="7" y1="11" x2="15" y2="11" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <line x1="7" y1="14" x2="13" y2="14" stroke={color} strokeWidth="1.2" opacity="0.5" />
    </Icon>
  ),

  simplicity: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="16" cy="16" r="11" stroke={color} strokeWidth="1.8" fill="none" />
      <circle cx="16" cy="16" r="2.5" fill={color} />
    </Icon>
  ),

  feedback: ({ size, color }) => (
    <Icon size={size} color={color}>
      <path d="M16 5 A11 11 0 0 1 27 16" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M25 12 L27 16 L23 16.5" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 27 A11 11 0 0 1 5 16" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M7 20 L5 16 L9 15.5" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  ),

  courage: ({ size, color }) => (
    <Icon size={size} color={color}>
      <path d="M16 4 L26 8 L26 17 C26 22 21 26 16 28 C11 26 6 22 6 17 L6 8 Z" stroke={color} strokeWidth="1.8" fill={`${color}10`} strokeLinejoin="round" />
      <path d="M13 18 L15.5 20.5 L20 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  ),

  respect: ({ size, color }) => (
    <Icon size={size} color={color}>
      <path d="M16 27 C16 27 4 20 4 13 C4 9.5 7 7 10 7 C12.5 7 14.5 8.5 16 11 C17.5 8.5 19.5 7 22 7 C25 7 28 9.5 28 13 C28 20 16 27 16 27 Z" stroke={color} strokeWidth="1.8" fill={`${color}12`} strokeLinejoin="round" />
    </Icon>
  ),

  // ── Practices ──
  pairProgramming: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="11" cy="10" r="3" stroke={color} strokeWidth="1.6" fill="none" />
      <circle cx="21" cy="10" r="3" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M11 13 C7 14 5 17 5 19" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M21 13 C25 14 27 17 27 19" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M11 14 L16 16 L21 14" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="8" y="21" width="16" height="6" rx="1.5" stroke={color} strokeWidth="1.4" fill={`${color}12`} />
      <line x1="12" y1="24" x2="20" y2="24" stroke={color} strokeWidth="1" opacity="0.5" />
    </Icon>
  ),

  tdd: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="11" y="4" width="10" height="20" rx="5" stroke={color} strokeWidth="1.8" fill="none" />
      <path d="M11 15 L21 15" stroke={color} strokeWidth="1.2" opacity="0.4" />
      <rect x="11" y="15" width="10" height="9" rx="5" fill={`${color}20`} stroke="none" />
      <path d="M13.5 19 L15.5 21 L19 17" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  ),

  ci: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="8" cy="8" r="2.5" stroke={color} strokeWidth="1.5" fill={`${color}20`} />
      <circle cx="24" cy="8" r="2.5" stroke={color} strokeWidth="1.5" fill={`${color}20`} />
      <circle cx="16" cy="16" r="2.5" stroke={color} strokeWidth="1.5" fill={`${color}30`} />
      <circle cx="16" cy="25" r="2.5" stroke={color} strokeWidth="1.5" fill={`${color}20`} />
      <line x1="10" y1="10" x2="14" y2="14" stroke={color} strokeWidth="1.5" />
      <line x1="22" y1="10" x2="18" y2="14" stroke={color} strokeWidth="1.5" />
      <line x1="16" y1="18.5" x2="16" y2="22.5" stroke={color} strokeWidth="1.5" />
    </Icon>
  ),

  incrementalDesign: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="5" y="22" width="22" height="5" rx="1" stroke={color} strokeWidth="1.5" fill={`${color}15`} />
      <rect x="8" y="16" width="16" height="5" rx="1" stroke={color} strokeWidth="1.5" fill={`${color}12`} />
      <rect x="11" y="10" width="10" height="5" rx="1" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <path d="M16 4 L18 8 L14 8 Z" stroke={color} strokeWidth="1.2" fill={`${color}20`} />
    </Icon>
  ),

  weeklyCycle: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="5" y="7" width="22" height="20" rx="3" stroke={color} strokeWidth="1.6" fill="none" />
      <line x1="5" y1="13" x2="27" y2="13" stroke={color} strokeWidth="1.4" />
      <line x1="12" y1="7" x2="12" y2="10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="20" y1="7" x2="20" y2="10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 20 m-4 0 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0" stroke={color} strokeWidth="1.2" fill="none" opacity="0.3" />
      <path d="M16 16 A4 4 0 0 1 20 20" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </Icon>
  ),

  quarterlyCycle: ({ size, color }) => (
    <Icon size={size} color={color}>
      <path d="M3 26 Q10 18 16 20 Q22 22 29 16" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <line x1="22" y1="6" x2="22" y2="18" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22 6 L29 9 L22 12" stroke={color} strokeWidth="1.4" fill={`${color}25`} strokeLinejoin="round" />
      <circle cx="8" cy="22" r="1.5" fill={color} opacity="0.3" />
      <circle cx="15" cy="20" r="1.5" fill={color} opacity="0.5" />
    </Icon>
  ),

  wholeTeam: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="16" cy="8" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="24" cy="14" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="22" cy="23" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="10" cy="23" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="8" cy="14" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <path d="M18 9.5 L22 12.5 M24 16.5 L23 20.5 M20 24 L12 24 M10 20.5 L9 16.5 M10.5 12.5 L14 9.5" stroke={color} strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3" stroke={color} strokeWidth="1" fill={`${color}10`} strokeDasharray="2 2" />
    </Icon>
  ),

  tenMinBuild: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="16" cy="16" r="11" stroke={color} strokeWidth="1.6" fill="none" />
      <line x1="16" y1="5" x2="16" y2="7.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 11 L14 17 L17 17 L14 23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  ),

  // ── New Primary Practices ──
  sitTogether: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="4" y="18" width="24" height="3" rx="1.5" stroke={color} strokeWidth="1.5" fill={`${color}12`} />
      <circle cx="10" cy="12" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="22" cy="12" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="16" cy="10" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <path d="M10 14.5 L10 18" stroke={color} strokeWidth="1.3" />
      <path d="M22 14.5 L22 18" stroke={color} strokeWidth="1.3" />
      <path d="M16 12.5 L16 18" stroke={color} strokeWidth="1.3" />
    </Icon>
  ),

  informativeWorkspace: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="4" y="4" width="24" height="18" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <line x1="4" y1="10" x2="28" y2="10" stroke={color} strokeWidth="1.2" opacity="0.4" />
      <rect x="7" y="13" width="8" height="6" rx="1" stroke={color} strokeWidth="1.2" fill={`${color}15`} />
      <path d="M18 13 L25 13 M18 16 L25 16 M18 19 L23 19" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <circle cx="8" cy="7" r="1" fill={color} opacity="0.5" />
      <circle cx="11" cy="7" r="1" fill={color} opacity="0.3" />
      <path d="M14 25 L18 25" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Icon>
  ),

  energizedWork: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="16" cy="16" r="10" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M16 6 L16 8 M16 24 L16 26 M6 16 L8 16 M24 16 L26 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 8.5 L10 10 M23.5 8.5 L22 10 M8.5 23.5 L10 22 M23.5 23.5 L22 22" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <circle cx="16" cy="16" r="4" fill={`${color}25`} stroke={color} strokeWidth="1.2" />
    </Icon>
  ),

  stories: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="5" y="4" width="22" height="24" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M9 10 L23 10 M9 14 L20 14 M9 18 L23 18 M9 22 L17 22" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M5 4 L16 4 L16 12 L12 9 L8 12 L8 4" stroke={color} strokeWidth="1.3" fill={`${color}20`} />
    </Icon>
  ),

  slack: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="4" y="8" width="24" height="16" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <line x1="8" y1="14" x2="20" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="8" y1="18" x2="14" y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
      <path d="M22 14 L24 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 3" opacity="0.3" />
    </Icon>
  ),

  // ── Corollary Practices ──
  realCustomerInvolvement: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="12" cy="10" r="3.5" stroke={color} strokeWidth="1.4" fill="none" />
      <path d="M12 13.5 C7 15 5 18 5 21" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="10" r="3.5" stroke={color} strokeWidth="1.4" fill={`${color}15`} />
      <path d="M22 13.5 C27 15 29 18 29 21" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M14 19 L18 17 L20 21 L14 19 Z" stroke={color} strokeWidth="1.2" fill={`${color}20`} />
    </Icon>
  ),

  incrementalDeployment: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="5" y="5" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.3" fill={`${color}25`} />
      <rect x="14" y="5" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.3" fill={`${color}18`} />
      <rect x="5" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.3" fill={`${color}12`} />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.3" fill="none" strokeDasharray="2 2" />
      <rect x="23" y="5" width="5" height="7" rx="1.5" stroke={color} strokeWidth="1.2" fill="none" strokeDasharray="2 2" opacity="0.4" />
      <path d="M16 24 L14 27 L18 27 Z" stroke={color} strokeWidth="1.2" fill={`${color}15`} />
    </Icon>
  ),

  teamContinuity: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="10" cy="10" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="22" cy="10" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="16" cy="22" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <path d="M12.5 11 L14 20 M19.5 11 L18 20" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M7 16 Q10 20 14 22 M25 16 Q22 20 18.5 22" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="3 2" />
      <circle cx="16" cy="16" r="5" stroke={color} strokeWidth="1" fill="none" strokeDasharray="2 3" opacity="0.3" />
    </Icon>
  ),

  shrinkingTeams: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="8" cy="12" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="16" cy="8" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="24" cy="12" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="12" cy="20" r="2.5" stroke={color} strokeWidth="1.4" fill={`${color}15`} />
      <circle cx="20" cy="20" r="2.5" stroke={color} strokeWidth="1.4" fill={`${color}15`} />
      <path d="M10 14 L12 18 M22 14 L20 18" stroke={color} strokeWidth="1.2" opacity="0.3" />
      <path d="M5 26 L27 26" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
      <path d="M8 26 L16 26 L24 26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 24 L16 26 L18 24" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  ),

  rootCauseAnalysis: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="16" cy="10" r="6" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M20 14 L22 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16 L16 20 L12 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 20 L20 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="24" r="1.5" fill={`${color}40`} />
      <circle cx="20" cy="24" r="1.5" fill={`${color}40`} />
      <path d="M14 8 L15 10 L18 9" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  ),

  sharedCode: ({ size, color }) => (
    <Icon size={size} color={color}>
      <path d="M12 10 L7 16 L12 22" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 10 L25 16 L20 22" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="18" y1="8" x2="14" y2="24" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="6" cy="16" r="1.5" fill={`${color}30`} />
      <circle cx="26" cy="16" r="1.5" fill={`${color}30`} />
    </Icon>
  ),

  codeAndTests: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="4" y="4" width="11" height="14" rx="2" stroke={color} strokeWidth="1.4" fill="none" />
      <path d="M7 8 L12 8 M7 11 L10 11" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
      <rect x="17" y="14" width="11" height="14" rx="2" stroke={color} strokeWidth="1.4" fill={`${color}10`} />
      <path d="M20 19 L22 21 L25 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 24 L25 24" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
      <path d="M13 14 L19 18" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
    </Icon>
  ),

  singleCodeBase: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="8" y="6" width="16" height="20" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M12 11 L20 11 M12 15 L18 15 M12 19 L20 19" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
      <path d="M14 2 L14 6 M18 2 L18 6" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M14 2 L18 2" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="16" cy="24" r="1.2" fill={color} opacity="0.4" />
    </Icon>
  ),

  dailyDeployment: ({ size, color }) => (
    <Icon size={size} color={color}>
      <path d="M16 4 L16 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 14 L16 19 L21 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M6 22 L26 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 25 L24 25" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M10 28 L22 28" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </Icon>
  ),

  negotiatedScopeContract: ({ size, color }) => (
    <Icon size={size} color={color}>
      <rect x="6" y="4" width="20" height="24" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M10 10 L22 10 M10 14 L22 14" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
      <path d="M10 18 L16 18" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
      <path d="M14 21 L17 24 L22 19" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 4 L12 7 M20 4 L20 7" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </Icon>
  ),

  payPerUse: ({ size, color }) => (
    <Icon size={size} color={color}>
      <circle cx="16" cy="16" r="10" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M16 8 L16 24" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M19 11 C19 11 18 9 16 9 C13.5 9 12 10.5 12 12 C12 13.5 13.5 14 16 14.5 C18.5 15 20 16 20 18 C20 20 18.5 21.5 16 21.5 C14 21.5 13 20.5 13 20.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </Icon>
  ),
};

/* ─── Data ─── */
const valuesData = [
  { name: "コミュニケーション", icon: "communication", desc: "チーム内の対話を重視する" },
  { name: "シンプリシティ", icon: "simplicity", desc: "必要十分なものだけを作る" },
  { name: "フィードバック", icon: "feedback", desc: "素早く学び、方向修正する" },
  { name: "勇気", icon: "courage", desc: "困難な決断を恐れない" },
  { name: "リスペクト", icon: "respect", desc: "互いの貢献を尊重する" },
];

const principlesData = [
  { name: "人間性", connects: ["コミュニケーション", "リスペクト"], practices: ["ペアプログラミング", "チーム全体", "いきいきとした仕事", "全員同席"] },
  { name: "経済性", connects: ["シンプリシティ", "フィードバック"], practices: ["インクリメンタルな設計", "週次サイクル", "ゆとり", "利用都度課金", "交渉によるスコープ契約"] },
  { name: "相互利益", connects: ["リスペクト", "コミュニケーション"], practices: ["テストファーストプログラミング", "ペアプログラミング", "インクリメンタルな設計", "コードの共有"] },
  { name: "改善", connects: ["フィードバック", "勇気"], practices: ["継続的インテグレーション", "インクリメンタルな設計", "根本原因分析", "チームの縮小"] },
  { name: "多様性", connects: ["リスペクト", "コミュニケーション"], practices: ["チーム全体", "ペアプログラミング", "本物の顧客参加"] },
  { name: "振り返り", connects: ["フィードバック", "コミュニケーション"], practices: ["週次サイクル", "四半期サイクル", "根本原因分析"] },
  { name: "流れ", connects: ["フィードバック", "シンプリシティ"], practices: ["継続的インテグレーション", "10分ビルド", "デイリーデプロイ", "ストーリー"] },
  { name: "機会", connects: ["勇気", "フィードバック"], practices: ["インクリメンタルな設計", "テストファーストプログラミング", "ストーリー"] },
  { name: "冗長性", connects: ["コミュニケーション", "フィードバック"], practices: ["ペアプログラミング", "テストファーストプログラミング", "継続的インテグレーション", "コードとテスト"] },
  { name: "失敗", connects: ["勇気", "フィードバック"], practices: ["テストファーストプログラミング", "継続的インテグレーション", "根本原因分析"] },
  { name: "品質", connects: ["シンプリシティ", "フィードバック"], practices: ["テストファーストプログラミング", "10分ビルド", "コードとテスト", "単一のコードベース"] },
  { name: "ベイビーステップ", connects: ["シンプリシティ", "勇気"], practices: ["テストファーストプログラミング", "継続的インテグレーション", "インクリメンタルなデプロイ", "デイリーデプロイ"] },
  { name: "責任の引き受け", connects: ["リスペクト", "勇気"], practices: ["週次サイクル", "チーム全体", "コードの共有", "チームの継続"] },
  { name: "自己相似性", connects: ["フィードバック"], practices: ["テストファーストプログラミング", "週次サイクル", "四半期サイクル", "情報満載のワークスペース"] },
];

const practicesData = [
  // 共同 (shared)
  { name: "チーム全体", icon: "wholeTeam", category: "shared" },
  { name: "全員同席", icon: "sitTogether", category: "shared" },
  { name: "情報満載のワークスペース", icon: "informativeWorkspace", category: "shared" },
  { name: "いきいきとした仕事", icon: "energizedWork", category: "shared" },
  { name: "根本原因分析", icon: "rootCauseAnalysis", category: "shared" },
  // 開発 (dev)
  { name: "ペアプログラミング", icon: "pairProgramming", category: "dev" },
  { name: "テストファーストプログラミング", icon: "tdd", category: "dev" },
  { name: "継続的インテグレーション", icon: "ci", category: "dev" },
  { name: "インクリメンタルな設計", icon: "incrementalDesign", category: "dev" },
  { name: "10分ビルド", icon: "tenMinBuild", category: "dev" },
  { name: "コードの共有", icon: "sharedCode", category: "dev" },
  { name: "コードとテスト", icon: "codeAndTests", category: "dev" },
  { name: "単一のコードベース", icon: "singleCodeBase", category: "dev" },
  { name: "デイリーデプロイ", icon: "dailyDeployment", category: "dev" },
  // 管理者 (mgmt)
  { name: "週次サイクル", icon: "weeklyCycle", category: "mgmt" },
  { name: "四半期サイクル", icon: "quarterlyCycle", category: "mgmt" },
  { name: "ゆとり", icon: "slack", category: "mgmt" },
  { name: "インクリメンタルなデプロイ", icon: "incrementalDeployment", category: "mgmt" },
  { name: "チームの継続", icon: "teamContinuity", category: "mgmt" },
  { name: "チームの縮小", icon: "shrinkingTeams", category: "mgmt" },
  // 顧客 (customer)
  { name: "ストーリー", icon: "stories", category: "customer" },
  { name: "本物の顧客参加", icon: "realCustomerInvolvement", category: "customer" },
  { name: "交渉によるスコープ契約", icon: "negotiatedScopeContract", category: "customer" },
  { name: "利用都度課金", icon: "payPerUse", category: "customer" },
];

const categoryColors = {
  shared:   { bg: "#dbeafe", border: "#3b82f6" },
  dev:      { bg: "#dcfce7", border: "#22c55e" },
  mgmt:     { bg: "#fef3c7", border: "#f59e0b" },
  customer: { bg: "#fce7f3", border: "#ec4899" },
};

/* ─── Component ─── */
export default function XPBridge() {
  const [activePrinciple, setActivePrinciple] = useState(null);
  const [hoverValue, setHoverValue] = useState(null);
  const [hoverPractice, setHoverPractice] = useState(null);

  const isAnyHover = activePrinciple || hoverValue || hoverPractice;

  const getHighlightedValues = () => {
    if (activePrinciple) {
      return principlesData.find((p) => p.name === activePrinciple)?.connects || [];
    }
    if (hoverPractice) {
      const related = principlesData.filter((p) => p.practices.includes(hoverPractice));
      return [...new Set(related.flatMap((p) => p.connects))];
    }
    return [];
  };

  const getHighlightedPractices = () => {
    if (activePrinciple) {
      return principlesData.find((p) => p.name === activePrinciple)?.practices || [];
    }
    if (hoverValue) {
      const related = principlesData.filter((p) => p.connects.includes(hoverValue));
      return [...new Set(related.flatMap((p) => p.practices))];
    }
    return [];
  };

  const getHighlightedPrinciples = () => {
    if (hoverValue) return principlesData.filter((p) => p.connects.includes(hoverValue)).map((p) => p.name);
    if (hoverPractice) return principlesData.filter((p) => p.practices.includes(hoverPractice)).map((p) => p.name);
    return [];
  };

  const highlightedValues = getHighlightedValues();
  const highlightedPractices = getHighlightedPractices();
  const highlightedPrinciples = getHighlightedPrinciples();

  const renderIcon = (iconKey, color, size = 32) => {
    const Ic = icons[iconKey];
    return Ic ? <Ic size={size} color={color} /> : null;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        padding: "32px 16px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
        color: "#e2e8f0",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <h1
            style={{
              fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: 2,
              background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}
          >
            Extreme Programming
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 14, marginTop: 4 }}>価値・原則・プラクティスの関係性</p>
        </div>

        {/* Explanation */}
        <div
          style={{
            textAlign: "center", marginBottom: 32, padding: "16px 24px",
            background: "rgba(255,255,255,0.04)", borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p style={{ color: "#94a3b8", fontSize: 13, margin: 0, lineHeight: 1.8 }}>
            <strong style={{ color: "#cbd5e1" }}>価値</strong>は抽象的な信念、
            <strong style={{ color: "#cbd5e1" }}>プラクティス</strong>は具体的な行動。
            その間を<strong style={{ color: "#cbd5e1" }}>原則</strong>が翻訳し橋渡しする。
            <br />各要素をホバーして、つながりを探ってみてください。
          </p>
        </div>

        {/* ═══ VALUES ═══ */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 4, height: 24, borderRadius: 2, background: "linear-gradient(180deg, #818cf8, #6366f1)" }} />
            <span style={{ fontSize: 13, color: "#818cf8", fontWeight: 600, letterSpacing: 2 }}>価値 VALUES</span>
            <span style={{ fontSize: 12, color: "#64748b" }}>— 何を大切にするか</span>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {valuesData.map((v) => {
              const isHL = highlightedValues.includes(v.name);
              const dimmed = isAnyHover && !isHL && hoverValue !== v.name;
              const isActive = hoverValue === v.name;
              const iconColor = isActive ? "#a5b4fc" : isHL ? "#818cf8" : "#64748b";
              return (
                <div
                  key={v.name}
                  onMouseEnter={() => { setHoverValue(v.name); setActivePrinciple(null); }}
                  onMouseLeave={() => setHoverValue(null)}
                  style={{
                    flex: "1 1 140px", maxWidth: 170, padding: "16px 12px 14px", borderRadius: 14,
                    background: isActive ? "rgba(99,102,241,0.25)" : isHL ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.04)",
                    border: isActive ? "2px solid #818cf8" : isHL ? "2px solid rgba(129,140,248,0.5)" : "2px solid rgba(255,255,255,0.06)",
                    cursor: "pointer", transition: "all 0.25s ease",
                    opacity: dimmed ? 0.3 : 1, textAlign: "center",
                    transform: isActive ? "translateY(-3px)" : "none",
                    boxShadow: isActive ? "0 8px 24px rgba(99,102,241,0.3)" : "none",
                  }}
                >
                  <div style={{ marginBottom: 8 }}>{renderIcon(v.icon, iconColor, 34)}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: isActive || isHL ? "#c7d2fe" : "#cbd5e1" }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 4, lineHeight: 1.5 }}>{v.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flow arrows */}
        <div style={{ display: "flex", justifyContent: "center", padding: "6px 0", gap: 4 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 2, height: 20, background: `rgba(129,140,248,${0.4 - i * 0.1})`, borderRadius: 1 }} />
          ))}
        </div>

        {/* ═══ PRINCIPLES ═══ */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 4, height: 24, borderRadius: 2, background: "linear-gradient(180deg, #f472b6, #ec4899)" }} />
            <span style={{ fontSize: 13, color: "#f472b6", fontWeight: 600, letterSpacing: 2 }}>原則 PRINCIPLES</span>
            <span style={{ fontSize: 12, color: "#64748b" }}>— 価値を行動に翻訳するガイドライン</span>
          </div>
          <div
            style={{
              position: "relative", background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 16,
            }}
          >
            <div
              style={{
                position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: 16, pointerEvents: "none",
                background: "linear-gradient(90deg, rgba(99,102,241,0.05) 0%, rgba(236,72,153,0.08) 50%, rgba(34,197,94,0.05) 100%)",
              }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", position: "relative" }}>
              {principlesData.map((p) => {
                const isActive = activePrinciple === p.name;
                const isHL = highlightedPrinciples.includes(p.name);
                const dimmed = isAnyHover && !isActive && !isHL && !activePrinciple;
                return (
                  <div
                    key={p.name}
                    onClick={() => setActivePrinciple(activePrinciple === p.name ? null : p.name)}
                    onMouseEnter={() => { if (!activePrinciple) { setHoverValue(null); setHoverPractice(null); } }}
                    style={{
                      padding: "7px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500,
                      cursor: "pointer", transition: "all 0.25s ease", opacity: dimmed ? 0.25 : 1,
                      background: isActive ? "rgba(236,72,153,0.25)" : isHL ? "rgba(236,72,153,0.12)" : "rgba(255,255,255,0.05)",
                      border: isActive ? "1.5px solid #f472b6" : isHL ? "1.5px solid rgba(244,114,182,0.4)" : "1.5px solid rgba(255,255,255,0.08)",
                      color: isActive || isHL ? "#fbcfe8" : "#94a3b8",
                      transform: isActive ? "scale(1.08)" : "none",
                      boxShadow: isActive ? "0 4px 16px rgba(236,72,153,0.3)" : "none",
                    }}
                  >
                    {p.name}
                  </div>
                );
              })}
            </div>
            {activePrinciple && (
              <div
                style={{
                  marginTop: 14, padding: "12px 16px",
                  background: "rgba(236,72,153,0.08)", borderRadius: 10,
                  border: "1px solid rgba(244,114,182,0.2)",
                }}
              >
                <div style={{ fontSize: 13, color: "#f9a8d4", marginBottom: 6 }}>
                  <strong>「{activePrinciple}」</strong>の原則は…
                </div>
                <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#94a3b8", flexWrap: "wrap" }}>
                  <div><span style={{ color: "#818cf8" }}>▲ 価値：</span> {principlesData.find((p) => p.name === activePrinciple)?.connects.join("、")}</div>
                  <div><span style={{ color: "#4ade80" }}>▼ プラクティス：</span> {principlesData.find((p) => p.name === activePrinciple)?.practices.join("、")}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Flow arrows */}
        <div style={{ display: "flex", justifyContent: "center", padding: "6px 0", gap: 4 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 2, height: 20, background: `rgba(74,222,128,${0.4 - i * 0.1})`, borderRadius: 1 }} />
          ))}
        </div>

        {/* ═══ PRACTICES ═══ */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 4, height: 24, borderRadius: 2, background: "linear-gradient(180deg, #4ade80, #22c55e)" }} />
            <span style={{ fontSize: 13, color: "#4ade80", fontWeight: 600, letterSpacing: 2 }}>プラクティス PRACTICES</span>
            <span style={{ fontSize: 12, color: "#64748b" }}>— 日々の具体的な行動</span>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {practicesData.map((p) => {
              const isHL = highlightedPractices.includes(p.name);
              const dimmed = isAnyHover && !isHL && hoverPractice !== p.name;
              const isActive = hoverPractice === p.name;
              const c = categoryColors[p.category];
              const iconColor = isActive ? "#86efac" : isHL ? "#4ade80" : "#64748b";
              return (
                <div
                  key={p.name}
                  onMouseEnter={() => { setHoverPractice(p.name); setActivePrinciple(null); }}
                  onMouseLeave={() => setHoverPractice(null)}
                  style={{
                    flex: "1 1 140px", maxWidth: 200, padding: "16px 12px 14px", borderRadius: 14,
                    background: isActive ? "rgba(74,222,128,0.2)" : isHL ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.04)",
                    border: isActive ? `2px solid ${c.border}` : isHL ? "2px solid rgba(74,222,128,0.4)" : "2px solid rgba(255,255,255,0.06)",
                    cursor: "pointer", transition: "all 0.25s ease",
                    opacity: dimmed ? 0.3 : 1, textAlign: "center",
                    transform: isActive ? "translateY(-3px)" : "none",
                    boxShadow: isActive ? "0 8px 24px rgba(34,197,94,0.2)" : "none",
                  }}
                >
                  <div style={{ marginBottom: 8 }}>{renderIcon(p.icon, iconColor, 30)}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: isActive || isHL ? "#bbf7d0" : "#cbd5e1" }}>{p.name}</div>
                  <div
                    style={{
                      marginTop: 5, display: "inline-block", fontSize: 10, padding: "2px 8px",
                      borderRadius: 8, background: `${c.bg}22`, color: c.border,
                      border: `1px solid ${c.border}44`,
                    }}
                  >
                    {{ shared: "共同", dev: "開発", mgmt: "管理者", customer: "顧客" }[p.category]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══ Abstraction Scale ═══ */}
        <div style={{ marginTop: 40, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, height: 6, borderRadius: 3, background: "linear-gradient(90deg, #6366f1, #ec4899, #22c55e)", opacity: 0.5 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#64748b", marginTop: 6 }}>
          <span>抽象的 <span style={{ color: "#818cf8" }}>Abstract</span></span>
          <span><span style={{ color: "#f472b6" }}>↔ 原則が橋渡し ↔</span></span>
          <span>具体的 <span style={{ color: "#4ade80" }}>Concrete</span></span>
        </div>

        {/* Key insight */}
        <div
          style={{
            marginTop: 32, padding: "20px 24px",
            background: "rgba(255,255,255,0.03)", borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 600, color: "#cbd5e1", marginBottom: 10 }}>
            なぜ3層構造なのか？
          </div>
          <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 2 }}>
            <strong style={{ color: "#818cf8" }}>価値</strong>だけでは「何をすべきか」が曖昧すぎ、
            <strong style={{ color: "#4ade80" }}>プラクティス</strong>だけでは「なぜそうするのか」が見えない。
            <strong style={{ color: "#f472b6" }}>原則</strong>がその間に立つことで、状況に応じたプラクティスの適用・応用・発明が可能になる。
            プラクティスを形骸化させず、新しい状況にも価値に基づいて対応できる——これがXPの設計思想。
          </div>
        </div>
      </div>
    </div>
  );
}
