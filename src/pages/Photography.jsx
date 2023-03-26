import React, { useState, useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import { MeshPhongMaterial, TextureLoader, Color } from "three";
import Modal from "react-modal";

function InteractiveGlobe() {
    const customModalStyle = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const points = [
        {
            name: "London",
            coordinates: [51.5074, 0.1278], // London, UK
            color: "red",
            images: [
                "https://cdn-lnp.dataweavers.io/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?rev=95097c3d2aab47109d7b0e944c804d1b?mw=640&hash=EA6D4D5963997B5F368154E65A7FA187",
            ],
        },
        {
            name: "NY",
            coordinates: [40.7128, -74.006], // New York City, USA
            color: "blue",
            images: [
                "https://images.nycgo.com/image/fetch/q_auto:low,c_fill,f_auto,w_340,h_224/https://www.nycgo.com/images/uploads/TC21_default_760x420_2x.jpg",
                "https://images.nycgo.com/image/fetch/q_auto:low,c_fill,f_auto,w_340,h_224/https://www.nycgo.com/images/articles/14351/statueliberty_schaer-091.jpg",
            ],
        },
    ];

    const [selectedPointImages, setSelectedPointImages] = useState([]);

    const handlePointClick = (event) => {
        console.log(event);
        // get the clicked point's associated images
        const pointImages = event.images;
        // display the images in a modal or overlay
        // (code for this step is not included in this example)
        console.log(pointImages);
        setSelectedPointImages(pointImages);
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
        <div>
            <Globe
                key={selectedPointImages.length} // add key prop to force re-render when selectedPointImages changes
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
            <Modal
                isOpen={selectedPointImages.length > 0}
                onRequestClose={() => setSelectedPointImages([])}
                style={customModalStyle}
                shouldCloseOnOverlayClick={true}
            >
                {selectedPointImages.map((image) => (
                    <img src={image} alt="" key={image} />
                ))}
            </Modal>
        </div>
    );
}

export default InteractiveGlobe;
