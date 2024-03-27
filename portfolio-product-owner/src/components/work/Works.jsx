import React, { useEffect, useState } from 'react';
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorksItems from './WorksItems';

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [projects, setProjects] = useState(projectsData);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(project => project.category === selectedCategory);
            setProjects(newProjects);
        }
    }, [selectedCategory]);

    const handleClick = (index, category) => {
        setSelectedCategory(category);
        setActiveIndex(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => (
                    <span
                        key={index}
                        className={`work__item ${activeIndex === index ? 'active-work' : ''}`}
                        onClick={() => handleClick(index, item.name)}
                    >
                        {item.name}
                    </span>
                ))}
            </div>
            <div className="work__container container grid">
                {projects.map(item => <WorksItems key={item.id} item={item} />)}
            </div>
        </div>
    );
}

export default Works;
