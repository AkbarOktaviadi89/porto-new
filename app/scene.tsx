"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
const nodes = [
    {
        name: "Client", sub: "Request origin", position: [-2.5, 0, 1.3], detail: "Web applications begin with a client request. I work with frontend developers to connect interfaces to backend services.", skills: "Web development · API integration"
    },
    {
        name: "Router", sub: "Network layer", position: [-2.5, 0, -1.3], detail: "Routing and network configuration connect users to services. My background includes MikroTik, Cisco, wireless networking, and network troubleshooting.", skills: "MikroTik · MTCNA · MTCRE"
    },
    {
        name: "Firewall", sub: "Access boundary", position: [0, 0, -1.3], detail: "Access controls and firewall rules help protect services. I combine system administration with vulnerability assessment and threat analysis.", skills: "Firewalls · CEH · CTIA"
    },
    {
        name: "API service", sub: "Application logic", position: [0, 0, 1.3], detail: "Backend services handle application logic and expose RESTful APIs. My project work includes Laravel applications and Java backend development.", skills: "Laravel · Java · RESTful APIs"
    },
    {
        name: "Database", sub: "Persistent data", position: [2.5, 0, 1.3], detail: "Applications rely on structured data and dependable recovery. My work includes database integration, backup management, and disaster recovery.", skills: "Database integration · Backups"
    },
    {
        name: "Linux server", sub: "Runtime infrastructure", position: [2.5, 0, -1.3], detail: "Server administration supports the application lifecycle: deployments, performance tuning, SSL, monitoring, and troubleshooting.", skills: "Linux · Deployment · SSL"
    }
];
const modeFocus = [3, 1, 2];
export default function Scene({ paused, mode, reset }: {
    paused: boolean;
    mode: number;
    reset: number;
}) {
    const host = useRef<HTMLDivElement>(null);
    const labels = useRef<(HTMLButtonElement | null)[]>([]);
    const [selected, setSelected] = useState(3);
    const [failed, setFailed] = useState(false);
    const [ready, setReady] = useState(false);
    const controls = useRef({
        paused, mode, reset, selected
    });
    useEffect(() => setSelected(modeFocus[mode]), [mode]);
    useEffect(() => {
        controls.current = {
            paused, mode, reset, selected
        };
    }, [paused, mode, reset, selected]);
    useEffect(() => {
        const container = host.current;
        if (!container)
            return;
        let renderer: THREE.WebGLRenderer;
        try {
            renderer = new THREE.WebGLRenderer({
                alpha: true, antialias: true, powerPreference: "low-power"
            });
        }
        catch {
            setFailed(true);
            return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        renderer.setClearColor(0x000000, 0);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.3;
        container.prepend(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(36, 1, .1, 100);
        camera.position.set(7, 8, 10);
        camera.lookAt(0, 0, 0);
        const group = new THREE.Group();
        scene.add(group);
        scene.add(new THREE.AmbientLight(0xc5d6f7, 2.6));
        const key = new THREE.DirectionalLight(0xffffff, 3.5);
        key.position.set(2, 6, 4);
        scene.add(key);
        const fill = new THREE.DirectionalLight(0x608cff, 3);
        fill.position.set(-4, 2, -3);
        scene.add(fill);
        const grid = new THREE.GridHelper(12, 24, 0x9bafc8, 0xd9e2ed);
        grid.position.y = -.25;
        group.add(grid);
        const solids: THREE.Mesh[] = [];
        const materials: THREE.MeshStandardMaterial[] = [];
        const bars: THREE.MeshBasicMaterial[] = [];
        nodes.forEach((node, i) => {
            const block = new THREE.Group();
            block.position.set(node.position[0], 0, node.position[2]);
            group.add(block);
            const material = new THREE.MeshStandardMaterial({
                color: 0x7189aa, metalness: .28, roughness: .38
            });
            materials.push(material);
            const height = i === 4 ? .72 : i === 5 ? .9 : .48;
            const body = new THREE.Mesh(i === 4 ? new THREE.CylinderGeometry(.5, .5, height, 40) : new THREE.BoxGeometry(1.05, height, .8), material);
            body.position.y = height / 2;
            body.userData.index = i;
            block.add(body);
            solids.push(body);
            const edge = new THREE.LineSegments(new THREE.EdgesGeometry(body.geometry), new THREE.LineBasicMaterial({
                color: 0x36577f, transparent: true, opacity: .72
            }));
            edge.position.copy(body.position);
            block.add(edge);
            const barMat = new THREE.MeshBasicMaterial({ color: 0xd9e6f8 });
            bars.push(barMat);
            const bar = new THREE.Mesh(new THREE.BoxGeometry(.65, .035, .035), barMat);
            bar.position.set(0, .18, .42);
            block.add(bar);
            if (i === 5) {
                for (let j = 1; j < 3; j++) {
                    const line = new THREE.Mesh(new THREE.BoxGeometry(.85, .016, .018), new THREE.MeshBasicMaterial({ color: 0xd9e6f8 }));
                    line.position.set(0, j * .28, .41);
                    block.add(line);
                }
            }
            const platform = new THREE.Mesh(new THREE.BoxGeometry(1.3, .055, 1.08), new THREE.MeshStandardMaterial({
                color: 0xc4d0df, metalness: .22, roughness: .5
            }));
            platform.position.y = -.05;
            block.add(platform);
        });
        const pairs = [[0, 1], [1, 2], [2, 3], [3, 4], [5, 3]];
        const flows: {
            curve: THREE.CatmullRomCurve3;
            dot: THREE.Mesh;
            line: THREE.Line;
            start: number;
            end: number;
        }[] = [];
        pairs.forEach(([start, end]) => {
            const a = new THREE.Vector3(nodes[start].position[0], .05, nodes[start].position[2]);
            const b = new THREE.Vector3(nodes[end].position[0], .05, nodes[end].position[2]);
            const pts = [a];
            if (a.x !== b.x && a.z !== b.z)
                pts.push(new THREE.Vector3(a.x, .05, b.z));
            pts.push(b);
            const curve = new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0);
            const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)), new THREE.LineBasicMaterial({ color: 0xa7b8cc }));
            group.add(line);
            const dot = new THREE.Mesh(new THREE.SphereGeometry(.046, 10, 8), new THREE.MeshBasicMaterial({ color: 0x2d5eea }));
            group.add(dot);
            flows.push({
                curve, dot, line, start, end
            });
        });
        let dragging = false, lastX = 0, lastY = 0, startX = 0, startY = 0, ry = 0, rx = 0, lastReset = controls.current.reset, frame = 0, visible = true, lastTime = 0, elapsed = 0;
        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        const down = (e: PointerEvent) => {
            if ((e.target as HTMLElement).tagName === "BUTTON")
                return;
            dragging = true;
            lastX = startX = e.clientX;
            lastY = startY = e.clientY;
            container.setPointerCapture(e.pointerId);
        };
        const move = (e: PointerEvent) => {
            if (!dragging)
                return;
            ry = THREE.MathUtils.clamp(ry + (e.clientX - lastX) * .004, -.6, .6);
            rx = THREE.MathUtils.clamp(rx + (e.clientY - lastY) * .002, -.15, .25);
            lastX = e.clientX;
            lastY = e.clientY;
        };
        const up = (e: PointerEvent) => {
            if (dragging && Math.hypot(e.clientX - startX, e.clientY - startY) < 6) {
                const r = container.getBoundingClientRect();
                pointer.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1);
                raycaster.setFromCamera(pointer, camera);
                const hit = raycaster.intersectObjects(solids)[0];
                if (hit)
                    setSelected(hit.object.userData.index);
            }
            dragging = false;
        };
        const cancel = () => {
            dragging = false;
        };
        const keydown = (e: KeyboardEvent) => {
            if (e.target !== container)
                return;
            if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
                e.preventDefault();
                ry = THREE.MathUtils.clamp(ry + (e.key === "ArrowRight" ? .08 : e.key === "ArrowLeft" ? -.08 : 0), -.6, .6);
                rx = THREE.MathUtils.clamp(rx + (e.key === "ArrowDown" ? .04 : e.key === "ArrowUp" ? -.04 : 0), -.15, .25);
            }
        };
        container.addEventListener("pointerdown", down);
        container.addEventListener("pointermove", move);
        container.addEventListener("pointerup", up);
        container.addEventListener("pointercancel", cancel);
        container.addEventListener("keydown", keydown);
        const resize = new ResizeObserver(() => {
            const r = container.getBoundingClientRect();
            renderer.setSize(r.width, r.height);
            camera.aspect = r.width / r.height;
            camera.position.set(7, 8, 10).multiplyScalar(camera.aspect < 1.15 ? .9 : .72);
            camera.lookAt(0, 0, 0);
            camera.updateProjectionMatrix();
        });
        resize.observe(container);
        const visibility = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
        });
        visibility.observe(container);
        function animate(time: number) {
            frame = requestAnimationFrame(animate);
            const dt = Math.min((time - lastTime) / 1000, .05);
            lastTime = time;
            if (!visible || document.hidden)
                return;
            const opts = controls.current;
            if (lastReset !== opts.reset) {
                rx = 0;
                ry = 0;
                lastReset = opts.reset;
            }
            if (!opts.paused)
                elapsed += dt;
            group.rotation.y += (ry - group.rotation.y) * .12;
            group.rotation.x += (rx - group.rotation.x) * .12;
            materials.forEach((m, i) => {
                m.color.set(i === opts.selected ? 0x2d5eea : 0x7189aa);
                m.emissive.set(i === opts.selected ? 0x0b1c46 : 0);
                bars[i].color.set(i === opts.selected ? 0xffffff : 0xd9e6f8);
            });
            flows.forEach((f, i) => {
                f.dot.position.copy(f.curve.getPoint((elapsed * .3 + i * .18) % 1));
                (f.line.material as THREE.LineBasicMaterial).color.set(f.start === opts.selected || f.end === opts.selected ? 0x2d5eea : 0x9daec3);
            });
            group.updateMatrixWorld();
            nodes.forEach((node, i) => {
                const el = labels.current[i];
                if (!el)
                    return;
                const v = new THREE.Vector3(node.position[0], i === 5 ? 1.2 : 1, node.position[2]);
                group.localToWorld(v);
                v.project(camera);
                el.style.left = `${(v.x * .5 + .5) * 100}%`;
                el.style.top = `${(-v.y * .5 + .5) * 100}%`;
            });
            renderer.render(scene, camera);
        }
        frame = requestAnimationFrame(animate);
        setReady(true);
        const contextLost = (e: Event) => {
            e.preventDefault();
            setFailed(true);
        };
        renderer.domElement.addEventListener("webglcontextlost", contextLost);
        return () => {
            cancelAnimationFrame(frame);
            resize.disconnect();
            visibility.disconnect();
            container.removeEventListener("pointerdown", down);
            container.removeEventListener("pointermove", move);
            container.removeEventListener("pointerup", up);
            container.removeEventListener("pointercancel", cancel);
            container.removeEventListener("keydown", keydown);
            renderer.domElement.removeEventListener("webglcontextlost", contextLost);
            scene.traverse(o => {
                if (o instanceof THREE.Mesh || o instanceof THREE.Line) {
                    o.geometry.dispose();
                    const ms = Array.isArray(o.material) ? o.material : [o.material];
                    ms.forEach(m => m.dispose());
                }
            });
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, []);
    return <>
    <div className={`scene-canvas architecture-canvas ${failed ? "diagram-unavailable" : ""}`} ref={host} tabIndex={0} role="group" aria-label="Conceptual 3D system architecture. Drag or use arrow keys to orbit. Select a labeled component to learn about the related skills.">
      {ready && !failed && nodes.map((n, i) => <button key={n.name} className={`node-label ${selected === i ? "is-selected" : ""}`} ref={el => {
        labels.current[i] = el;
    }} onClick={() => setSelected(i)} aria-pressed={selected === i}>
        {n.name}
      </button>)}
    </div>
    {!ready && !failed && <div className="scene-loading">LOADING ARCHITECTURE<span /></div>}
    {failed && <div className="architecture-fallback">
      <p>Explore the system components</p>
      <div>
        {nodes.map((n, i) => <button key={n.name} onClick={() => setSelected(i)} aria-pressed={selected === i}>
          {n.name}
        </button>)}
      </div>
    </div>}
    <div className="node-detail" aria-live="polite">
      <div>
        <strong>
          {nodes[selected].name}
        </strong>
        <span>
          {nodes[selected].sub}
        </span>
      </div>
      <p>
        {nodes[selected].detail}
      </p>
      <span className="node-skills">
        {nodes[selected].skills}
      </span>
    </div>
  </>;
}
