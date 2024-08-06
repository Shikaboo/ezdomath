import { useEffect, useMemo, useRef } from "react";
import { Html, Line } from '@react-three/drei';
import '/src/components/generic/subject/subject.css';
import { useFrame } from "@react-three/fiber";

function Adjust({subjectState,answer,handleCorrect}) {
	useEffect(()=>{
		if (!answer) {return;}
		if (!handleCorrect) {return;}
		handleCorrect.set(String(answer)==='회전')
	},[answer,handleCorrect]);
	return <>
	</>
}

// Scene
function Scene({subjectState}) {
	const groupRef = useRef(null);
	const meshColor = useMemo(()=>{
		const root = getComputedStyle(document.documentElement);
		return root.getPropertyValue('--color_main').trim();
	},[]);
	useFrame((state,delta)=>{
		groupRef.current.rotation.y += 0.01;
	})
	return <group ref={groupRef} position={[0, 1, 0]}>
		<mesh>
			<boxGeometry args={[2,2,2]}/>
			<meshStandardMaterial 
				color={meshColor}
			/>
		</mesh>
	</group>
}

// Controller
function Controller({handleSubjectState}) {
	//핸들러 작동
	useEffect(()=>{
		// console.log('핸들러작동');
		handleSubjectState.set({});
	},[]);
}

export {
	Adjust,
	Scene,
	Controller
}