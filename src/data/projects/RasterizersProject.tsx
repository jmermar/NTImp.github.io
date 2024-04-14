import { ProjectTemplate } from "../templates/ProjectTemplate";
import rasterizer from "../../assets/rasterizer.gif";
import { Link } from "react-router-dom";

const projectPath =
  "https://github.com/jmermar/TFG-Real-time-rendering/tree/master";

const RasterizersProject: ProjectTemplate = {
  id: "3d-rasterizers",
  title: "3D rasterizers",
  thumbNailSrc: rasterizer,
  previewText: (
    <>
      <p>
        3 tiny 3D rasterizers, one of them being fully implemented on CPU, and
        other two being implemented with openGL and making use of either texture
        sampling or PBR Material rendering.
      </p>
      <p>
        This was part of my final project at University, dedicated to the
        research of real-time 3D rendering using rasterization of triangles.
      </p>
    </>
  ),
  text: (
    <>
      <p>
        This project consists on 3 3D rasterizers that I made as part of my
        degree's final project. The aim of the project was to research on
        realtime 3D rendering algorithms, and so I created both a rasterizer
        that runs on CPU, where I implemented all algorithms needed for a basic
        render pipeline, and two openGL renderers for comparing performance when
        using GPU acceleration.
      </p>
      <h3>CPU Rasterizer</h3>
      <p>
        The CPU rasterizer had the following features:
        <ul>
          <li>Model loading from obj files.</li>
          <li>Perspective corrected texture mapping.</li>
          <li>
            Multithreading on various parts of the code for speeding up render
            time.
          </li>
        </ul>
      </p>
      <h3>GPU Rasterizers</h3>
      <p>
        As for the GPU rasterizers, one of them was a clone of the CPU
        rasterizer but using opengl for rendering, and used for performance
        analisys.
      </p>
      <p>
        The other used a light shading algorithm based on PBR materials, but
        without texturing. It is possible to twak material parameters in real
        time by using the keyboard.
      </p>
      <p>
        More info on the project can be found in it's{" "}
        <Link to={projectPath}>github repository</Link>.
      </p>
    </>
  ),
};

export default RasterizersProject;
