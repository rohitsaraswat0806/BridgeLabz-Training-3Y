// Q9. Fitness App Analytics

class FitnessAnalytics {
    constructor(workoutData) {
        if (!workoutData || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.workoutData = workoutData;
    }

    getActiveUsers() {
        return this.workoutData.filter(person => person.steps > 7000);
    }

    getAverageCalories() {
        let totalCalories = this.workoutData.reduce((total, person) => {
            return total + person.calories;
        }, 0);

        return totalCalories / this.workoutData.length;
    }

    getUserSummary() {
        return this.workoutData.map(person => {
            return person.user + " walked " + person.steps +
                " steps and burned " + person.calories + " calories.";
        });
    }
}

let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    let analytics = new FitnessAnalytics(workoutData);

    console.log("Active users:", analytics.getActiveUsers());
    console.log("Average calories:", analytics.getAverageCalories());
    console.log("User summaries:", analytics.getUserSummary());
} catch (error) {
    console.log("Analytics error:", error.message);
}
