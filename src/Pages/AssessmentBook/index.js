import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../Services/api";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import "./styleAssessment.css";

export default function AssessmentBook() {

    const [nota, setNota] = useState('');
    const [idLivro, setIdLivro] = useState('');
    const [idUser, setIdUser] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    return (
        <div className="container-principal">
            <header className="header-Books">
                <h1>Avaliar livro</h1>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} height={16} color="#0e0e10" />
                    Voltar
                </Link>
            </header>
            <main className="container-assessments">
                <div className="container">
                    <h2>Nova avaliação</h2>
                    <div className="secao-form">
                        <form className="form">
                            <label>Id do usuario:</label>
                            <input
                                type="text"
                                value={idUser}
                                onChange={(e) => setIdUser(e.target.value)}
                            />
                            <label>Id do livro:</label>
                            <input
                                type="text"
                                value={idLivro}
                                onChange={(e) => setIdLivro(e.target.value)}
                            />
                            <label>Nota:</label>
                            <select value={nota} onChange={(e) => setNota(e.target.value)}>
                                <option value="">Selecione um nota</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <label>Descrição:</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" cols="50"></textarea>
                            
                            <button type="submit">Salvar avaliação</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )

}

