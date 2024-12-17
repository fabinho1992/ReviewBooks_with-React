import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../Services/api";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import "./style.css";

export default function BooksUser() {
    const [user, setUser] = useState({});
    const [assessmentResponses, setAssessmentResponses] = useState([]);
    const idUser = localStorage.getItem('id');
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get(`/api/User/${idUser}`);
                console.log(response.data);
                setUser(response.data.data);
                setAssessmentResponses(response.data.data.assessmentResponses || []);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
        fetchData();
    }, [idUser]);

    return (
        <div className="container-books-user">
            <div className="secao-books-user">
                <h1>Minhas Avaliações</h1>
                <h2>Nome: {user.name}</h2>
                <h2>Email: {user.email}</h2>
            </div>
            <div className="avaliacoes-usuario">
                {assessmentResponses.map(assessment => (
                    <div key={assessment.id || assessment.assessmentDate} className="assessment-card">
                        <p>Livro: {assessment.titleBook}</p>
                        <p>Nota: {assessment.nota}</p>
                        <p>Data: {assessment.assessmentDate}</p>
                        <p>Descrição: {assessment.description}</p>
                    </div>
                ))}
            </div>      
        </div>
    );
}
       