import { useEffect, useRef } from 'react';

const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const syncSize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const ro = new ResizeObserver(syncSize);
    ro.observe(canvas);
    syncSize();

    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 v_texCoord;

      float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
      }

      float hash3(vec3 p) {
          p = fract(p * vec3(0.1031, 0.1030, 0.0973));
          p += dot(p, p.yzx + 33.33);
          return fract((p.x + p.y) * p.z);
      }

      // Noise function for organic patterns
      float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
          vec2 uv = v_texCoord;

          // Dark sophisticated gradient background
          vec3 color1 = vec3(0.039, 0.078, 0.114); // #0a141d dark teal
          vec3 color2 = vec3(0.075, 0.114, 0.145); // #131d25 lighter teal
          vec3 color3 = vec3(0.055, 0.095, 0.125); // #0e1820 intermediate

          vec3 finalColor = mix(color1, color2, uv.y + sin(u_time * 0.05) * 0.03);

          // ===== DISCRETE TECHNICAL GRID =====
          vec2 gridUv = uv * vec2(20.0, 20.0 * (u_resolution.y / u_resolution.x));
          vec2 grid = abs(fract(gridUv - 0.5) - 0.5) / fwidth(gridUv);
          float line = min(grid.x, grid.y);
          float gridLine = (1.0 - smoothstep(0.0, 1.2, line)) * 0.012;
          finalColor += vec3(0.1, 0.25, 0.35) * gridLine;

          // ===== ABSTRACT CODE LINES =====
          // Horizontal code lines
          for(float i = 0.0; i < 8.0; i++) {
              float h = hash(vec2(i, 0.5));
              float yPos = fract(h + u_time * 0.02 * (0.5 + h));
              float thickness = 0.0012;
              float dash = sin((uv.x - u_time * 0.1) * 30.0) * 0.5 + 0.5;
              dash = step(0.3, dash);
              float segment = smoothstep(thickness, 0.0, abs(uv.y - yPos)) * dash;
              float xMask = smoothstep(-0.1, 0.15, uv.x) * (1.0 - smoothstep(0.85, 1.1, uv.x));
              finalColor += vec3(0.2, 0.6, 0.8) * segment * xMask * 0.04;
          }

          // ===== GEOMETRIC PATTERNS =====
          // Hexagonal/geometric shapes
          for(float i = 0.0; i < 6.0; i++) {
              vec2 pos = vec2(hash(vec2(i, 1.0)), hash(vec2(i, 2.0)));
              pos.y = fract(pos.y + u_time * 0.008 * (i * 0.1));
              vec2 diff = uv - pos;
              float angle = atan(diff.y, diff.x);
              float radius = length(diff);
              
              float hexagon = abs(sin(angle * 6.0)) / (cos(mod(angle, 1.047) - 0.523));
              float shape = smoothstep(0.08, 0.06, abs(radius - hexagon * 0.02));
              finalColor += vec3(0.15, 0.3, 0.45) * shape * 0.025;
          }

          // ===== AI CONNECTIONS (Neural network-like) =====
          // Connection nodes and lines
          vec3 connectionColor = vec3(0.3, 0.7, 0.9) * 0.3;
          for(float i = 0.0; i < 12.0; i++) {
              vec2 nodePos = vec2(hash(vec2(i * 2.1, 3.0)), hash(vec2(i * 2.1, 4.0)));
              nodePos.x = mod(nodePos.x + u_time * 0.03 * (1.0 - i / 12.0), 1.0);
              
              float dist = length(uv - nodePos);
              float node = smoothstep(0.015, 0.008, dist);
              
              finalColor += connectionColor * node * 0.08;
              
              // Connections between nodes
              for(float j = 0.0; j < 3.0; j++) {
                  vec2 otherPos = vec2(hash(vec2(i + j, 5.0)), hash(vec2(i + j, 6.0)));
                  otherPos.x = mod(otherPos.x + u_time * 0.03 * (1.0 - (i + j) / 12.0), 1.0);
                  
                  vec2 line = nodePos - otherPos;
                  vec2 closest = nodePos + line * clamp(dot(uv - nodePos, -line) / dot(line, line), 0.0, 1.0);
                  float lineEq = length(uv - closest);
                  
                  float connection = smoothstep(0.008, 0.003, lineEq);
                  finalColor += connectionColor * connection * 0.05;
              }
          }

          // ===== DIGITAL CIRCUITS =====
          // Circuit paths with glowing segments
          float speed = u_time * 0.12;
          for(float i = 0.0; i < 6.0; i++) {
              float h = hash(vec2(i, 7.0));
              
              // Vertical circuit flows
              float yFlow = fract(h + speed * (h - 0.5) * 0.5);
              float xStart = 0.15 + i * 0.12;
              float thickness = 0.0015;
              
              float vCircuit = smoothstep(thickness, 0.0, abs(uv.x - xStart)) 
                             * smoothstep(0.15, 0.0, abs(uv.y - yFlow));
              
              finalColor += vec3(0.976, 0.451, 0.086) * vCircuit * 0.035;
              
              // Horizontal circuit segments
              float xFlow = fract(h * 0.7 + speed * 0.3);
              float yCircuit = smoothstep(thickness, 0.0, abs(uv.y - (0.2 + i * 0.12))) 
                             * smoothstep(0.15, 0.0, abs(uv.x - xFlow));
              
              finalColor += vec3(0.976, 0.451, 0.086) * yCircuit * 0.03;
          }

          // ===== LUMINOUS PARTICLES =====
          for(float i = 0.0; i < 18.0; i++) {
              vec2 pos = vec2(hash(vec2(i * 3.1, 8.0)), hash(vec2(i * 3.1, 9.0)));
              
              // Multiple layers of particles with different speeds
              pos.y = fract(pos.y - u_time * (0.015 + 0.005 * sin(i)));
              float t = u_time * 0.02 + i;
              pos.x = fract(pos.x + sin(t * 0.3) * 0.1);
              
              float dist = length(uv - pos);
              float glow = 0.0008 / (dist + 0.002);
              
              // Mix of colors for particles
              vec3 particleColor = mix(
                  vec3(0.2, 0.6, 0.9),
                  vec3(0.976, 0.451, 0.086),
                  sin(i * 0.5 + u_time * 0.1) * 0.5 + 0.5
              );
              
              finalColor += particleColor * glow * 0.08;
          }

          // ===== NOISE OVERLAY for subtlety =====
          float noiseVal = noise(uv * 50.0 + u_time * 0.05) * 0.15;
          finalColor += vec3(noiseVal) * 0.003;

          // ===== RADIAL VIGNETTE (subtle) =====
          vec2 center = uv - 0.5;
          float vignette = 1.0 - dot(center, center) * 1.2;
          finalColor *= clamp(vignette, 0.4, 1.0);

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');

    let animId: number;

    const render = (t: number) => {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="shader-canvas"
      aria-hidden="true"
    />
  );
};

export default ShaderBackground;
