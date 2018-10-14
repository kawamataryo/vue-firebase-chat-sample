import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  // Populate your firebase configuration data here.
    apiKey: "AIzaSyDgWJB6PbrX3vrKCcXQ0OLOHEyusS_IdnU",
    authDomain: "vue-chat-sample.firebaseapp.com",
    databaseURL: "https://vue-chat-sample.firebaseio.com",
    projectId: "vue-chat-sample",
    storageBucket: "vue-chat-sample.appspot.com",
    messagingSenderId: "216208640140"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.firestore();

// Timestamp型を使うために
// 参考 https://qiita.com/teramotodaiki/items/b3592326579166003102
const settings = { timestampsInSnapshots: true };
db.settings(settings);

