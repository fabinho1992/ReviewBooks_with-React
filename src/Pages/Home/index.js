import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../Services/api";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import "./style.css";

export default function Home() {

    const navigate = useNavigate();

    return (

        <div className="container-Home">

            <div className="secao-home">
                <h1>Gerenciador de Livros</h1>
                <p>Cadaste um novo livro, ou veja todos os livros cadastrados</p>
            </div>
            <div className="secao-botoes">
                <button onClick={() => navigate('/newBook')} >Novo Livro</button>

                <button onClick={() => navigate('/books')} >Livros</button>

                <button onClick={() => navigate('/assessmentBook')} >Avaliar Livro</button>
            </div>

        </div>
    )
}