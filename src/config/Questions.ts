const Questions = [
    {
        id: "1",
        question: "¿Quién es conocido como 'El Flaco' en el rock argentino?",
        answers: [
            { answer: "Ricardo Iorio", isCorrect: false },
            { answer: "Charly García", isCorrect: false },
            { answer: "Gustavo Cerati", isCorrect: false },
            { answer: "Andrés Calamaro", isCorrect: false },
            { answer: "Luis Alberto Spinetta", isCorrect: true }
        ],
        block: 1
    },
    {
        id: "2",
        question: "¿Cuál de estos tangos fue compuesto por Carlos Gardel?",
        answers: [
            { answer: "Cambalache", isCorrect: false },
            { answer: "El día que me quieras", isCorrect: false },
            { answer: "Por una cabeza", isCorrect: false },
            { answer: "Mi Buenos Aires querido", isCorrect: true },
            { answer: "La cumparsita", isCorrect: false }
        ],
        block: 1
    },
    {
        id: "3",
        question: "¿Qué grupo popularizó el tema 'La Balsa'?",
        answers: [
            { answer: "Soda Stereo", isCorrect: false },
            { answer: "Los Gatos", isCorrect: true },
            { answer: "Los Redondos", isCorrect: false },
            { answer: "Virus", isCorrect: false },
            { answer: "Los Auténticos Decadentes", isCorrect: false }
        ],
        block: 1
    },
    {
        id: "4",
        question: "¿Quién es la voz principal de la banda de cumbia 'Los Ángeles Azules'?",
        answers: [
            { answer: "No pertenecen a la música argentina", isCorrect: true },
            { answer: "Pablo Lescano", isCorrect: false },
            { answer: "Sebastián Mendoza", isCorrect: false },
            { answer: "Mario Luis", isCorrect: false },
            { answer: "Rodrigo Bueno", isCorrect: false }
        ],
        block: 1
    },
    {
        id: "5",
        question: "¿Cuál es el nombre del álbum debut de Soda Stereo?",
        answers: [
            { answer: "Soda Stereo", isCorrect: true },
            { answer: "Signos", isCorrect: false },
            { answer: "Doble Vida", isCorrect: false },
            { answer: "Canción Animal", isCorrect: false },
            { answer: "Dynamo", isCorrect: false }
        ],
        block: 1
    },
    {
        id: "6",
        question: "¿Qué cantante de folklore argentino es conocido como 'El Chaqueño'?",
        answers: [
            { answer: "Jorge Rojas", isCorrect: false },
            { answer: "Abel Pintos", isCorrect: false },
            { answer: "Soledad Pastorutti", isCorrect: false },
            { answer: "Oscar Esperanza Palavecino", isCorrect: true },
            { answer: "Luciano Pereyra", isCorrect: false }
        ],
        block: 1
    },
    {
        id: "7",
        question: "¿En qué año se fundó la banda 'Los Auténticos Decadentes'?",
        answers: [
            { answer: "1985", isCorrect: false },
            { answer: "1986", isCorrect: true },
            { answer: "1987", isCorrect: false },
            { answer: "1988", isCorrect: false },
            { answer: "1989", isCorrect: false }
        ],
        block: 1
    },
    {
        id: "8",
        question: "¿Quién interpretó la canción 'Deja de llorar'?",
        answers: [
            { answer: "Axel", isCorrect: false },
            { answer: "El Polaco", isCorrect: true },
            { answer: "Luciano Pereyra", isCorrect: false },
            { answer: "Diego Torres", isCorrect: false },
            { answer: "Cacho Castaña", isCorrect: false }
        ],
        block: 1
    },
    {
        id: "9",
        question: "¿Cuál es el verdadero nombre de 'La Mona' Jiménez?",
        answers: [
            { answer: "Carlos Jiménez", isCorrect: true },
            { answer: "Marcelo Jiménez", isCorrect: false },
            { answer: "Jorge Jiménez", isCorrect: false },
            { answer: "Luis Jiménez", isCorrect: false },
            { answer: "Miguel Jiménez", isCorrect: false }
        ],
        block: 1
    },
    {
        id: "10",
        question: "¿Qué banda es conocida por la canción 'Siguiendo la Luna'?",
        answers: [
            { answer: "Los Palmeras", isCorrect: false },
            { answer: "Los Fabulosos Cadillacs", isCorrect: true },
            { answer: "Los Nocheros", isCorrect: false },
            { answer: "La Beriso", isCorrect: false },
            { answer: "Catupecu Machu", isCorrect: false }
        ],
        block: 1
    },
    {
        id: "11",
        question: "¿Qué grupo de rock argentino lanzó el álbum 'Oktubre'?",
        answers: [
            { answer: "Virus", isCorrect: false },
            { answer: "Patricio Rey y sus Redonditos de Ricota", isCorrect: true },
            { answer: "Los Fabulosos Cadillacs", isCorrect: false },
            { answer: "Soda Stereo", isCorrect: false },
            { answer: "Los Auténticos Decadentes", isCorrect: false }
        ],
        block: 2
    },
    {
        id: "12",
        question: "¿Cuál de estos temas es interpretado por Mercedes Sosa?",
        answers: [
            { answer: "Zamba para olvidarte", isCorrect: false },
            { answer: "Gracias a la vida", isCorrect: false },
            { answer: "Alfonsina y el mar", isCorrect: false },
            { answer: "Canción con todos", isCorrect: false },
            { answer: "Todas son correctas", isCorrect: true }
        ],
        block: 2
    },
    {
        id: "13",
        question: "¿Quién compuso 'Adiós Nonino'?",
        answers: [
            { answer: "Mariano Mores", isCorrect: false },
            { answer: "Astor Piazzolla", isCorrect: true },
            { answer: "Carlos Gardel", isCorrect: false },
            { answer: "Aníbal Troilo", isCorrect: false },
            { answer: "Osvaldo Pugliese", isCorrect: false }
        ],
        block: 2
    },
    {
        id: "14",
        question: "¿Qué banda popularizó el tema 'Loco Tu Forma de Ser'?",
        answers: [
            { answer: "Los Pericos", isCorrect: false },
            { answer: "Los Auténticos Decadentes", isCorrect: true },
            { answer: "Los Enanitos Verdes", isCorrect: false },
            { answer: "La Mosca Tsé-Tsé", isCorrect: false },
            { answer: "Rata Blanca", isCorrect: false }
        ],
        block: 2
    },
    {
        id: "15",
        question: "¿Cuál es el nombre de la cantante de cumbia conocida como 'La Reina de la Movida Tropical'?",
        answers: [
            { answer: "Gilda", isCorrect: true },
            { answer: "Rodrigo Bueno", isCorrect: false },
            { answer: "Pablo Lescano", isCorrect: false },
            { answer: "Walter Olmos", isCorrect: false },
            { answer: "Sebastián Mendoza", isCorrect: false }
        ],
        block: 2
    },
    {
        id: "16",
        question: "¿Cuál fue el primer disco de Charly García como solista?",
        answers: [
            { answer: "Clics Modernos", isCorrect: false },
            { answer: "Parte de la Religión", isCorrect: false },
            { answer: "Música del Alma", isCorrect: true },
            { answer: "Piano Bar", isCorrect: false },
            { answer: "Cómo Conseguir Chicas", isCorrect: false }
        ],
        block: 2
    },
    {
        id: "17",
        question: "¿Qué cantante es conocido por el tema 'Azúcar Amargo'?",
        answers: [
            { answer: "Soledad Pastorutti", isCorrect: false },
            { answer: "Valeria Lynch", isCorrect: false },
            { answer: "Fey", isCorrect: true },
            { answer: "Sandra Mihanovich", isCorrect: false },
            { answer: "Marcela Morelo", isCorrect: false }
        ],
        block: 2
    },
    {
        id: "18",
        question: "¿Qué grupo es conocido por fusionar rock y folklore en Argentina?",
        answers: [
            { answer: "Soda Stereo", isCorrect: false },
            { answer: "Los Auténticos Decadentes", isCorrect: false },
            { answer: "Los Redondos", isCorrect: false },
            { answer: "Arbolito", isCorrect: true },
            { answer: "Babasónicos", isCorrect: false }
        ],
        block: 2
    },
    {
        id: "19",
        question: "¿Qué artista lanzó el álbum 'Cenizas en el viento'?",
        answers: [
            { answer: "Soledad Pastorutti", isCorrect: false },
            { answer: "León Gieco", isCorrect: true },
            { answer: "Víctor Heredia", isCorrect: false },
            { answer: "Abel Pintos", isCorrect: false },
            { answer: "Jorge Rojas", isCorrect: false }
        ],
        block: 2
    },
    {
        id: "20",
        question: "¿Cuál es la canción más famosa de la banda 'Los Piojos'?",
        answers: [
            { answer: "La Rubia Tarada", isCorrect: false },
            { answer: "El Farolito", isCorrect: true },
            { answer: "De Música Ligera", isCorrect: false },
            { answer: "Ji Ji Ji", isCorrect: false },
            { answer: "Mi Buenos Aires Querido", isCorrect: false }
        ],
        block: 2
    },
    {
        id: "21",
        question: "¿Qué cantante es conocido como 'El Rey del Pop'?",
        answers: [
            { answer: "Elvis Presley", isCorrect: false },
            { answer: "Michael Jackson", isCorrect: true },
            { answer: "Prince", isCorrect: false },
            { answer: "Madonna", isCorrect: false },
            { answer: "David Bowie", isCorrect: false }
        ],
        block: 3
    },
    {
        id: "22",
        question: "¿Cuál es el nombre del festival de música más famoso de Estados Unidos?",
        answers: [
            { answer: "Coachella", isCorrect: true },
            { answer: "Lollapalooza", isCorrect: false },
            { answer: "Burning Man", isCorrect: false },
            { answer: "Glastonbury", isCorrect: false },
            { answer: "Woodstock", isCorrect: false }
        ],
        block: 3
    },
    {
        id: "23",
        question: "¿Qué banda lanzó el álbum 'The Dark Side of the Moon'?",
        answers: [
            { answer: "The Beatles", isCorrect: false },
            { answer: "Pink Floyd", isCorrect: true },
            { answer: "Led Zeppelin", isCorrect: false },
            { answer: "The Rolling Stones", isCorrect: false },
            { answer: "Queen", isCorrect: false }
        ],
        block: 3
    },
    {
        id: "24",
        question: "¿Quién es el artista detrás del álbum 'Thriller'?",
        answers: [
            { answer: "Madonna", isCorrect: false },
            { answer: "Prince", isCorrect: false },
            { answer: "Michael Jackson", isCorrect: true },
            { answer: "David Bowie", isCorrect: false },
            { answer: "Whitney Houston", isCorrect: false }
        ],
        block: 3
    },
    {
        id: "25",
        question: "¿Qué grupo es conocido por la canción 'Smells Like Teen Spirit'?",
        answers: [
            { answer: "Nirvana", isCorrect: true },
            { answer: "Pearl Jam", isCorrect: false },
            { answer: "Alice in Chains", isCorrect: false },
            { answer: "Soundgarden", isCorrect: false },
            { answer: "Red Hot Chili Peppers", isCorrect: false }
        ],
        block: 3
    },
    {
        id: "26",
        question: "¿Qué banda de rock estadounidense lanzó el álbum 'Nevermind'?",
        answers: [
            { answer: "Nirvana", isCorrect: true },
            { answer: "Foo Fighters", isCorrect: false },
            { answer: "Pearl Jam", isCorrect: false },
            { answer: "Green Day", isCorrect: false },
            { answer: "The Smashing Pumpkins", isCorrect: false }
        ],
        block: 3
    },
    {
        id: "27",
        question: "¿Qué cantante británica es conocida por la canción 'Rolling in the Deep'?",
        answers: [
            { answer: "Adele", isCorrect: true },
            { answer: "Amy Winehouse", isCorrect: false },
            { answer: "Duffy", isCorrect: false },
            { answer: "Leona Lewis", isCorrect: false },
            { answer: "Jessie J", isCorrect: false }
        ],
        block: 3
    },
    {
        id: "28",
        question: "¿Qué banda es conocida por la canción 'Bohemian Rhapsody'?",
        answers: [
            { answer: "Queen", isCorrect: true },
            { answer: "The Beatles", isCorrect: false },
            { answer: "The Rolling Stones", isCorrect: false },
            { answer: "Led Zeppelin", isCorrect: false },
            { answer: "Pink Floyd", isCorrect: false }
        ],
        block: 3
    },
    {
        id: "29",
        question: "¿Cuál de estos artistas no formó parte de The Beatles?",
        answers: [
            { answer: "John Lennon", isCorrect: false },
            { answer: "Mick Jagger", isCorrect: true },
            { answer: "Paul McCartney", isCorrect: false },
            { answer: "George Harrison", isCorrect: false },
            { answer: "Ringo Starr", isCorrect: false }
        ],
        block: 3
    },
    {
        id: "30",
        question: "¿Qué álbum de The Beatles es conocido como 'El Álbum Blanco'?",
        answers: [
            { answer: "Abbey Road", isCorrect: false },
            { answer: "Sgt. Pepper's Lonely Hearts Club Band", isCorrect: false },
            { answer: "The Beatles", isCorrect: true },
            { answer: "Let It Be", isCorrect: false },
            { answer: "Revolver", isCorrect: false }
        ],
        block: 3
    }
];

export default Questions