import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{
    http:any;
    apikey: String;
    workoutsUrl: String;

    constructor(http: Http){
        this.http = http;
        this.apikey = '<your MLAB APIKEY>';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkout/collections/workouts';
    }

    getWorkouts(){
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apikey)
            .map( res => res.json());
    }

    addWorkout(workout){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.workoutsUrl+'?apiKey='+this.apikey, JSON.stringify(workout), {headers: headers})
            .map( res => res.json());
    }

    deleteWorkout(workoutId){
        return this.http.delete(this.workoutsUrl+'/'+workoutId+'?apiKey='+this.apikey)
            .map( res => res.json());
    }

}