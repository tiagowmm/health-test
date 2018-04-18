function Agendamento(){

    var clazz = {
        para: function(consulta){
            // milli, segundos, minutos, hora, valor
            var umDiaEmMilliSegundos = 1000 * 60 * 60 * 24;
            var vinteDiasEmMiliSegundos = umDiaEmMilliSegundos * 20; 
            var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMiliSegundos);

            while(novaData.getDay() == 0 || novaData.getDay() == 6){
                novaData = new Date(novaData.getTime() + umDiaEmMilliSegundos);
            }

            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);
            return novaConsulta;
        }
    };
    return clazz;
}