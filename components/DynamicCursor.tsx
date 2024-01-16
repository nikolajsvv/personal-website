import { useState } from 'react';

interface DynamicCursorProps {
	isHovered: boolean;
}
const DynamicCursor = ({ isHovered }: DynamicCursorProps) => {
	return <div className={`custom-cursor ${isHovered ? 'hovered' : ''}`} />;
};

export default DynamicCursor;
