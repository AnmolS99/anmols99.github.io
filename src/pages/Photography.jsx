import React, { useState, useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import { MeshPhongMaterial, TextureLoader, Color } from "three";

function InteractiveGlobe() {
    const initialPoints = [
        {
            name: "London",
            coordinates: [51.5074, 0.1278], // London, UK
            color: "red",
            images: [
                "https://www.visitlondon.com/things-to-do/sightseeing/tourist-attraction/london-bridge",
                "https://www.visitlondon.com/things-to-do/sightseeing/tourist-attraction/big-ben",
            ],
        },
        {
            name: "NY",
            coordinates: [40.7128, -74.006], // New York City, USA
            color: "blue",
            images: [
                "https://www.nycgo.com/attractions/statue-of-liberty-national-monument/",
                "https://www.nycgo.com/attractions/central-park/",
            ],
        },
    ];

    const [points, setPoints] = useState(initialPoints);

    const handlePointClick = (event) => {
        console.log(event);
        // get the clicked point's index
        const pointIndex = event.pointIndex;
        // get the clicked point's associated images
        const pointImages = points[pointIndex].images;
        // display the images in a modal or overlay
        // (code for this step is not included in this example)
        // console.log(pointIndex);
    };

    // custom globe material
    const globeMaterial = new MeshPhongMaterial();
    globeMaterial.bumpScale = 10;
    new TextureLoader().load(
        "//unpkg.com/three-globe/example/img/earth-water.png",
        (texture) => {
            globeMaterial.specularMap = texture;
            globeMaterial.specular = new Color("grey");
            globeMaterial.shininess = 15;
        }
    );

    const globeEl = useRef();

    useEffect(() => {
        setTimeout(() => {
            // wait for scene to be populated (asynchronously)
            const directionalLight = globeEl.current
                .scene()
                .children.find((obj3d) => obj3d.type === "DirectionalLight");
            directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
        });
    }, []);

    return (
        <Globe
            // set the globe options
            globeMaterial={globeMaterial}
            // set the globe texture
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            // set the clickable points
            pointsData={points.map((point) => ({
                ...point,
            }))}
            pointLat={(d) => d.coordinates[0]}
            pointLng={(d) => d.coordinates[1]}
            pointColor={(d) => d.color}
            onPointClick={handlePointClick}
        />
    );
}

export default InteractiveGlobe;
