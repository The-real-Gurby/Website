"use client";

import { useEffect, useRef } from "react";

export default function ProjectsPage() {
  return (
    <main className="bg-black min-h-screen text-white px-6 py-16">
      {/* Other page content */}

      {/* Python Code Display Box */}
      <div className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto overflow-x-auto mb-16">
        <h3 className="text-2xl font-bold mb-4 text-white">Python Cube Code</h3>
        <h2 className="text-2xl font-bold mb-4 text-white">Made by me! Scroll down to see the web version</h2>
        <pre className="text-sm font-mono whitespace-pre-wrap text-white">
{`def draw_cube(size, centerpos,color, angle_y=45, angle_x=45):
    #Spent majority of my working hours trying to figure out the math for this 
     # # https://en.wikipedia.org/wiki/Orthographic_projection # https://en.wikipedia.org/wiki/Isometric_projection 
     # # These wiki pages really helped and were the basis for most of the math in this code

    box=Image.new("RGBA", img.size, (255, 255, 255,0))      
    draw=ImageDraw.Draw(box)
    # Step 1: Where to draw it
    # cx and cy are the "center" coordinates on the screen (2D canvas)
    
    cx, cy = centerpos

    # Step 2: Define the cube
    half = size / 2  # Half the size of the cube. We'll use this to make the cube extend equally in all directions

    # Now we define the 8 corners (vertices) of the cube in 3D space
    # Each vertex is a list [x, y, z] for its position in space
    # Imagine the cube centered at the origin (0,0,0)
    vertices = [
        [-half, -half, -half],  # back-bottom-left
        [ half, -half, -half],  # back-bottom-right
        [ half,  half, -half],  # back-top-right
        [-half,  half, -half],  # back-top-left
        [-half, -half,  half],  # front-bottom-left
        [ half, -half,  half],  # front-bottom-right
        [ half,  half,  half],  # front-top-right
        [-half,  half,  half]   # front-top-left  
    ]

    # Step 3: Convert angles to something Python can use
    # Python math functions like sin() and cos() use radians, not degrees
    import math
    theta_y = math.radians(angle_y)  # how much we rotate around the "up" axis
    theta_x = math.radians(angle_x)  # how much we tilt up/down

    # Step 4: Rotate the cube around Y-axis (up/down)
    rotated_y = []
    for x, y, z in vertices:
        x_new = x * math.cos(theta_y) + z * math.sin(theta_y)
        z_new = -x * math.sin(theta_y) + z * math.cos(theta_y)
        # Y doesn't change when rotating around vertical axis
        rotated_y.append((x_new, y, z_new))

    # Step 5: Rotate the cube around X-axis (tilt up/down)
    rotated = []
    for x, y, z in rotated_y:
        # We calculate a new Y and Z after tilting the cube forward/backward
        y_new = y * math.cos(theta_x) - z * math.sin(theta_x)
        z_new = y * math.sin(theta_x) + z * math.cos(theta_x)
        # X stays the same when tilting up/down
        rotated.append((x, y_new, z_new))

   
    # Step 6: Flatten cube to 2D (projection)
    
    # The computer screen is 2D, so we only care about X and Y for drawing
    # We "ignore" Z for now, but keep it later for ordering
    projected = [(cx + x, cy + y) for x, y, z in rotated]

    # Step 7: Define which points make each face of the cube
    # Each face uses 4 corners
    faces = [
        (0,1,2,3),  # back
        (4,5,6,7),  # front
        (0,1,5,4),  # bottom
        (2,3,7,6),  # top
        (1,2,6,5),  # right
        (0,3,7,4)   # left
    ]

    # Step 8: Decide the order to draw faces
    # Faces farther away should be drawn first so closer faces appear on top
    # We calculate the average Z (depth) of each face
    face_depths = [(sum(rotated[i][2] for i in face)/4, face) for face in faces]
    # Sort faces by depth (smallest Z first)
    face_depths.sort(key=lambda f: f[0])

    # Step 9: Draw each face

    # depth isnt used in the code i tried using it to do color but i didn't know how to do a gradient and then I gave up

    for depth, face in face_depths:
        # Get 2D points of the face corners
        pts = [projected[i] for i in face]
      
        # Draw the face as a filled polygon with a black outline
        draw.polygon(pts, fill=color, outline="black",width=1)
    return box`}
        </pre>
      </div>

      {/* Interactive 3D Cube Canvas */}
      <InteractiveCube />
      <div className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto overflow-x-auto mb-16">
        <h3 className="text-2xl font-bold mb-4 text-white">Java ube Code</h3>
        <pre className="text-sm font-mono whitespace-pre-wrap text-white">
{`function InteractiveCube() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    let angleX = 30;
    let angleY = 45;
    const cubeSize = 100;
    const center = { x: w / 2, y: h / 2 };

    function drawCube(center, size, color, angleYDeg, angleXDeg) {
      const cx = center.x;
      const cy = center.y;
      const half = size / 2;

      const vertices = [
        [-half, -half, -half],
        [half, -half, -half],
        [half, half, -half],
        [-half, half, -half],
        [-half, -half, half],
        [half, -half, half],
        [half, half, half],
        [-half, half, half],
      ];

      const thetaY = (angleYDeg * Math.PI) / 180;
      const thetaX = (angleXDeg * Math.PI) / 180;

      const rotated = vertices.map(([x, y, z]) => {
        let x1 = x * Math.cos(thetaY) + z * Math.sin(thetaY);
        let z1 = -x * Math.sin(thetaY) + z * Math.cos(thetaY);
        let y1 = y * Math.cos(thetaX) - z1 * Math.sin(thetaX);
        let z2 = y * Math.sin(thetaX) + z1 * Math.cos(thetaX);
        return [x1, y1, z2];
      });

      const projected = rotated.map(([x, y, z]) => [cx + x, cy + y, z]);

      const faces = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 1, 5, 4],
        [2, 3, 7, 6],
        [1, 2, 6, 5],
        [0, 3, 7, 4],
      ];

      const faceDepths = faces
        .map((f) => ({
          face: f,
          depth: f.reduce((sum, i) => sum + projected[i][2], 0) / f.length,
        }))
        .sort((a, b) => a.depth - b.depth);

      for (const { face } of faceDepths) {
        ctx.beginPath();
        const [startX, startY] = projected[face[0]];
        ctx.moveTo(startX, startY);
        for (let i = 1; i < face.length; i++) {
          const [x, y] = projected[face[i]];
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      drawCube(center, cubeSize, "dodgerblue", angleX, angleY);
      angleX += 1;
      angleY += 0.5;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4 text-white">🧊 3D Cube Animation</h3>
      <p className="mb-4 text-gray-400 text-center">
        Real-time rotating cube using Canvas and JavaScript.
      </p>
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className="bg-black rounded-lg shadow-lg"
      />
    </div>`}
        </pre>
      </div>
      <div className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto overflow-x-auto mb-16">
        <h3 className="text-2xl font-bold mb-4 text-white">Java ube Code</h3>
        <pre className="text-sm font-mono whitespace-pre-wrap text-white">
          {`Overall this was a real fun project that with some of the other things I added after the cube took me about 18hrs to complete`}
        </pre>
        </div>
    </main>
  );
}


function InteractiveCube() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    let angleX = 30;
    let angleY = 45;
    const cubeSize = 100;
    const center = { x: w / 2, y: h / 2 };

    function drawCube(center, size, color, angleYDeg, angleXDeg) {
      const cx = center.x;
      const cy = center.y;
      const half = size / 2;

      const vertices = [
        [-half, -half, -half],
        [half, -half, -half],
        [half, half, -half],
        [-half, half, -half],
        [-half, -half, half],
        [half, -half, half],
        [half, half, half],
        [-half, half, half],
      ];

      const thetaY = (angleYDeg * Math.PI) / 180;
      const thetaX = (angleXDeg * Math.PI) / 180;

      const rotated = vertices.map(([x, y, z]) => {
        let x1 = x * Math.cos(thetaY) + z * Math.sin(thetaY);
        let z1 = -x * Math.sin(thetaY) + z * Math.cos(thetaY);
        let y1 = y * Math.cos(thetaX) - z1 * Math.sin(thetaX);
        let z2 = y * Math.sin(thetaX) + z1 * Math.cos(thetaX);
        return [x1, y1, z2];
      });

      const projected = rotated.map(([x, y, z]) => [cx + x, cy + y, z]);

      const faces = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 1, 5, 4],
        [2, 3, 7, 6],
        [1, 2, 6, 5],
        [0, 3, 7, 4],
      ];

      const faceDepths = faces
        .map((f) => ({
          face: f,
          depth: f.reduce((sum, i) => sum + projected[i][2], 0) / f.length,
        }))
        .sort((a, b) => a.depth - b.depth);

      for (const { face } of faceDepths) {
        ctx.beginPath();
        const [startX, startY] = projected[face[0]];
        ctx.moveTo(startX, startY);
        for (let i = 1; i < face.length; i++) {
          const [x, y] = projected[face[i]];
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      drawCube(center, cubeSize, "dodgerblue", angleX, angleY);
      angleX += 1;
      angleY += 0.5;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4 text-white">🧊 3D Cube Animation</h3>
      <p className="mb-4 text-gray-400 text-center">
        Real-time rotating cube using Canvas and JavaScript.
      </p>
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className="bg-black rounded-lg shadow-lg"
      />
    </div>

  );
}
