module.exports = {
    cubeModel : (edge, callback) => {
        if(!edge) callback('Data is not found!')
        const volume = edge ** 3
        const surfaceArea = edge * 6
        const result = {
            volume, surfaceArea
        }
        return callback(null, result)
    },
    rectangularPrismModel : (data, callback) => {
        if(!data) callback("Data is not found!")
        const { length, width, height } = data
        const volume = width * height * length
        const surfaceArea = 2 * ((width * length) + (height * length) + (height * width))
        const result = {
            volume, surfaceArea
        }
        return callback(null, result)
    }
    
}