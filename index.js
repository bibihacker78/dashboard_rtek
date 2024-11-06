const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

/*document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Nombre d\'inscriptions',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
*/
/*
document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les données depuis l'API
    function loadChartData() {
        fetch('/ophtalmologue')
            .then(response => response.json())
            .then(data => {
               
                const labels = data.map(item => item.month);
                const values = data.map(item => item.count);

                // Mettre à jour le graphique
                const ctx = document.getElementById('myChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Nombre d\'inscriptions',
                            data: values,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 2,
                            fill: false
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }

    // Charger les données du graphique au chargement de la page
    loadChartData();
});
*/

document.addEventListener('DOMContentLoaded', function () {
    function loadChartData() {
        fetch('http://localhost:3000/ophtamologue')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur de réseau');
                }
                return response.json();
            })
            .then(data => {
                const labels = data.map(item => item.month);
                const values = data.map(item => item.count);

                const ctx = document.getElementById('myChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Nombre d\'inscriptions',
                            data: values,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 2,
                            fill: false
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }
    loadChartData();
});

document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les données depuis l'API
    function loadTotalCount() {
        fetch('http://localhost:3000/ophtamologue/count')
            .then(response => response.json())
            .then(data => {
                // Afficher le nombre total d'ophtalmologues dans le tableau de bord
                const totalCountElement = document.getElementById('totalCount');
                totalCountElement.textContent = `${data.total}`;
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }

    // Charger les données du total au chargement de la page
    loadTotalCount();
});

document.addEventListener('DOMContentLoaded', function() {

    function loadTotalCountUsers(){
        fetch('http://localhost:3000/patients/count/')
        .then(response => response.json())
        .then(data => {
            const totalCountUsers = document.getElementById('totalCountUser');
            totalCountUsers.textContent = `${data.totalUsers}`;
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }
    loadTotalCountUsers();
 });


document.addEventListener('DOMContentLoaded', function() {
    function loadStatutRdv (){
        fetch('http://localhost:3000/rendez-vous/statut')
        .then(response => response.json())
        .then(data => {
            const statutRdv = document.getElementById('statutRdv');
            let statut = '';
            data.forEach(item => {
                    // Définir la couleur en fonction du statut
                    let color;
                    if (item.status === "Annulé") {
                        color = "red";
                    } else if (item.status === "Confirmé") {
                        color = "grey";
                    } else {
                        color = "green"; // couleur par défaut
                    }
                statut += `
                    <tr>
                        <td>${item.patient_nom}</td>
                        <td>${item.ophtamologue_nom}</td>
                        <td>${item.date}</td>
                        <td style="color: ${color};">${item.status}</td>
                    </tr>
                `;
              
            });
            statutRdv.innerHTML = statut;
        })
       .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }
    loadStatutRdv();
});