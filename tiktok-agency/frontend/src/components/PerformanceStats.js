import React, { useEffect, useState } from "react";
import axios from "axios";

const PerformanceStats = ({userId}) => {
  const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(`https://localhost:5000/api/users/performance-stats/${userId}`);
                setStats(response.data.performanceStats);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStats();
    }, [userId]);

    if (!stats) {
        return <div>Cargando estadísticas...</div>;

    return (
        <div>
            <h2>Estadísticas de Rendimiento</h2>
            <h3>Diarias</h3>
            <pre>{JSON.stringify(stats.daily, null, 2)}</pre>
            <h3>Semanales</h3>
            <pre>{JSON.stringify(stats.weekly, null, 2)}</pre>
            <h3>Mensuales</h3>
            <pre>{JSON.stringify(stats.monthly, null, 2)}</pre>
        </div>
    );    
    };

    export default PerformanceStats;