import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVwPfLXVjAM2xt77T1ubAPoxBvMfrLTJQ",
  authDomain: "testing-firebase-f9627.firebaseapp.com",
  projectId: "testing-firebase-f9627",
  storageBucket: "testing-firebase-f9627.appspot.com",
  messagingSenderId: "202351419870",
  appId: "1:202351419870:web:4af4056ac6d9a74a4b3d4f",
  measurementId: "G-B3PKRK2Q5F",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionGames = collection(db, "games");

const formAddGame = document.querySelector('[data-js="add-game-form"]');
const gamesList = document.querySelector('[data-js="games-list"]');
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const unsubscribe = onSnapshot(collectionGames, (querySnapshot) => {
  if (!querySnapshot.metadata.hasPendingWrites) {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, createdAt } = doc.data();

      acc += `<li data-id="${doc.id}" class="my-4">
                  <h5>${title}</h5>
                  
                  <ul>
                    <li>Desenvolvido por ${developedBy}</li>
                    ${createdAt ? `<li>Adicionado ao banco em ${createdAt.toDate()}</li>`: ""}
                  </ul>
      
                  <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
              </li>`;

      return acc;
    }, "");

    gamesList.innerHTML = gamesLis;
  }
});

// getDocs(collectionGames)
//   .then(querySnapshot => {
//     const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
//         const { title, developedBy, createdAt } = doc.data()

//         acc += `<li data-id="${doc.id}" class="my-4">
//             <h5>${title}</h5>

//             <ul>
//             <li>Desenvolvido por ${developedBy}</li>
//             <li>Adicionado no banco em ${createdAt.toDate()}</li>
//             </ul>

//             <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
//         </li>`

//         return acc
//     }, '')

//     gamesList.innerHTML = gamesLis
//     console.log(gamesLis);
//   })
//   .catch((error) => console.log('Error getting documents: ', error))

formAddGame.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp(),
  })
    .then((doc) => console.log("doc criado com o ID", doc.id))
    .catch(console.log);
});

gamesList.addEventListener("click", (e) => {
  const idRemoveButton = e.target.dataset.remove;

  if (idRemoveButton) {
    deleteDoc(doc(db, "games", idRemoveButton))
      .then(() => console.log("Jogo removido com sucesso"))
      .catch(console.log);
  }
});

buttonUnsub.addEventListener('click', unsubscribe)