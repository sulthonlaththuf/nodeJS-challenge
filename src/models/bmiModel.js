module.exports = {
    bmiModel : (heightArgs, massArgs, callback) => {
        heightArgs = heightArgs / 100
        const bmi = massArgs / (heightArgs * heightArgs)

        if(bmi < 18.5 ) callback(null, {bmi, category : 'underweight'})
        if(bmi >= 18.5 && bmi < 25) callback(null, {bmi, category : 'normal weight or ideal'})
        if(bmi >= 25 && bmi < 30) callback(null, {bmi, category : 'overweight'})
        return callback(null, {bmi, category : 'obesity'})
    }

    //underweight = < 18.5
    //normal weight = 18.5 - 24.9
    //overweight = 25 - 29.9
    //obesity = > 30
}