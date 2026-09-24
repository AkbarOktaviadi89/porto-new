import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { projects } from "@/lib/portfolio-data";
export const alt = "Akbar Oktaviadi — Web Developer and Coding Mentor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpengraphImage() {
    const photo = await readFile(join(process.cwd(), "public/img/profile-new.png"));
    const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;
    const live = projects.filter(p => p.domain).length;
    return new ImageResponse((<div style={{ display: "flex", width: "100%", height: "100%", background: "#f9fafc", padding: 64, alignItems: "center", justifyContent: "space-between", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", width: 640 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#1d7a4c" }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#2d9d66" }}/>
            {`${live} web products live in production`}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontSize: 92, fontWeight: 600, letterSpacing: -4, lineHeight: 1, color: "#182331" }}>
            <span>Akbar</span>
            <span style={{ color: "#42556f" }}>Oktaviadi.</span>
          </div>
          <div style={{ marginTop: 32, fontSize: 36, color: "#283b55" }}>Web Developer and Coding Mentor</div>
          <div style={{ marginTop: 14, fontSize: 24, color: "#5c6c83" }}>Laravel · Next.js · Golang · Bandar Lampung, ID</div>
        </div>
        <div style={{ display: "flex", width: 400, height: 480, padding: 10, borderRadius: 28, background: "#fff", boxShadow: "0 30px 60px rgba(31,58,106,.25)" }}>
          <img src={photoSrc} alt="" width={380} height={460} style={{ width: 380, height: 460, borderRadius: 20, objectFit: "cover", objectPosition: "55% 20%" }}/>
        </div>
      </div>), size);
}
