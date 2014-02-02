var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        datos.value= "32F";
        calcular();
        assert.deepEqual(resul.value, "0C");
    });
    test('45C = 113.0 Farenheit', function() {
        datos.value = "45C";
        calcular();
        assert.deepEqual(resul.value, "113F");
    });
    test('52.3F = 11.27C', function() {
        datos.value = "52.3F";
        calcular();
        assert.deepEqual(resul.value, "11.277777777777777C");
    });
    test('95C = 203F', function() {
        datos.value = "95C";
        calcular();
        assert.deepEqual(resul.value, "203F");
    });
    test('275F = 135C', function() {
        datos.value = "275F";
        calcular();
        assert.deepEqual(resul.value, "135C");
    });
    test('234F = 112.22C', function() {
        datos.value = "234F";
        calcular();
        assert.deepEqual(resul.value, "112.22222222222223C");
    });
    test('-12.3C = 9.86F', function() {
        datos.value = "-12.3C";
        calcular();
        assert.deepEqual(resul.value, "9.86F");
    });
    test('-45.6F = -43.11C', function() {
        datos.value = "-45.6F";
        calcular();
        assert.deepEqual(resul.value, "-43.111111111111114C");
    });
    test('1C = 33.8F', function() {
        datos.value = "1C";
        calcular();
        assert.deepEqual(resul.value, "33.8F");
    });
    test('0F = -17.77C', function() {
        datos.value = "0F";
        calcular();
        assert.deepEqual(resul.value, "-17.77777777777778C");
    });
});