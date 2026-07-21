import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";

export const alt = "Mariscos da Anita — Distribuição de marisco fresco · Olhão";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(
    path.join(process.cwd(), "public/logo-mark.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #062530 0%, #0a3344 55%, #1a5c6e 100%)",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#c4b5a0",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Distribuição HORECA · Olhão
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <img
            src={logoSrc}
            width={200}
            height={200}
            style={{ borderRadius: 32 }}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 88,
                lineHeight: 1.05,
                color: "#fffcf7",
                fontWeight: 500,
              }}
            >
              Mariscos da Anita
            </div>
            <div style={{ fontSize: 38, color: "#e8dfd0", fontStyle: "italic" }}>
              Marisco fresco da ria para a tua cozinha
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(246,241,232,0.25)",
            paddingTop: 28,
            color: "#f6f1e8",
            fontSize: 26,
          }}
        >
          <span>Algarve & Alentejo</span>
          <span
            style={{
              background: "#c45c3e",
              color: "#fffcf7",
              padding: "10px 26px",
              borderRadius: 999,
              fontSize: 24,
            }}
          >
            Pedidos via WhatsApp
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
