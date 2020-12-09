// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
    apiKey: "AIzaSyALqpJcANgeugkQM9ch2XDyNyTukXCeZYA",
    authDomain: "alumnos-proyecto.firebaseapp.com",
    databaseURL: "https://alumnos-proyecto.firebaseio.com",
    projectId: "alumnos-proyecto",
    storageBucket: "alumnos-proyecto.appspot.com",
    messagingSenderId: "874181606612",
    appId: "1:874181606612:web:03e6e30e44fc8eefad8f41",
    measurementId: "G-WGYV5L86QK"
  },
};
export const baseUrl = `http://127.0.0.1:8000/api/v1/`;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
