import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

const firebaseConfig = {
    apiKey: 'AIzaSyBVwPfLXVjAM2xt77T1ubAPoxBvMfrLTJQ',
    authDomain: 'testing-firebase-f9627.firebaseapp.com',
    projectId: 'testing-firebase-f9627',
    storageBucket: 'testing-firebase-f9627.appspot.com',
    messagingSenderId: '202351419870',
    appId: '1:202351419870:web:4af4056ac6d9a74a4b3d4f',
    measurementId: 'G-B3PKRK2Q5F'
  }

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

getDocs(collection(db, 'games'))
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
        const { title, developedBy, createdAt } = doc.data()
        
        acc += `<li class="my-4">
            <h5>${title}</h5>
            
            <ul>
            <li>Desenvolvido por ${developedBy}</li>
            <li>Adicionado no banco em ${createdAt.toDate()}</li>
            </ul>
        </li>`

        return acc
    }, '')

    const gamesList = document.querySelector('[data-js="games-list"]')
    gamesList.innerHTML = gamesLis
    console.log(gamesLis);
  })
  .catch((error) => console.log('Error getting documents: ', error))