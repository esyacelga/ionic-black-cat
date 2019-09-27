import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageAppService {
    objGuardado: any = null;

    constructor(private storage: Storage, private platform: Platform) {

    }

    loadStorageObject(key: string) {
        const promesa = new Promise((resolve, reject) => {
            if (this.platform.is('cordova')) {
                console.log('Entro a guardar el objeto', key);
                console.log('Inicializando storage');
                console.log('Storage inicializado ');
                this.storage.get(key).then((val) => {
                    let objRegenrado = null;
                    try {
                        objRegenrado = JSON.parse(JSON.stringify(val));
                    } catch (error) {
                        console.error(error);
                        console.log(error);
                    }
                    resolve(objRegenrado);
                }, reason => {
                    console.log(this.objGuardado);
                });

            } else {
                if (localStorage.getItem(key)) {
                    this.objGuardado = JSON.parse(localStorage.getItem(key));
                    resolve(this.objGuardado);
                } else {
                    resolve(null);
                }

            }
        });
        return promesa;
    }

    setStorageObject(obj, key) {
        if (this.platform.is('cordova')) {
            console.log('Entro a guardar el objeto', key);
            this.storage.set(key, obj);
        } else {
            localStorage.setItem(key, JSON.stringify(obj));
        }
    }
}