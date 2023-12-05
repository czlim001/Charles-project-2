import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './exercises.css'

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [currentExercise, setCurrentExercise] = useState(null); // Ensure this line is present
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://wger.de/api/v2/exercise/?language=2');
            const data = await response.json();
            setExercises(data.results);
        };

        fetchData();
    }, []);

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleExerciseClick = exercise => {
        setCurrentExercise(exercise); // Make sure this function sets the currentExercise
    };

    return (
        <div className="exercise-list">
            <div className="exercise-names">
                {currentExercises.map(exercise => (
                    <p key={exercise.id} onClick={() => handleExerciseClick(exercise)}>
                        {exercise.name}
                    </p>
                ))}
            </div>
            {currentExercise && (
                <div className="exercise-description">
                    <h3>{currentExercise.name}</h3>
                    <div dangerouslySetInnerHTML={{ __html: currentExercise.description }} />
                </div>
            )}
            <Pagination
                exercisesPerPage={exercisesPerPage}
                totalExercises={exercises.length}
                paginate={paginate}
            />
        </div>
    );
};

export default ExerciseList;

