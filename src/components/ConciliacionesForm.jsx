import { useState, useEffect } from "react";
import { TextInput, Button, Label } from "flowbite-react";
import ResultsTable from "./ResultsTable";

export default function ConciliacionesForm() {
  const [showTable, setShowTable] = useState(false);

  const [data, setData] = useState({
    company: "",
    materialName: "",
    price: 0,
    cubicMeters: 0,
    pavementDistance: 0,
    dirtRoadDistance: 0,
  });

  const [finalInfo, setFinalInfo] = useState({
    totalPrice: 0, //monto total de los m3 por el precio por m3
    totalDistance: 0, //obtener el monto total de kilometros mas los 2 de inicio
    totalCTM: 0, //el monto total del precio de ctm
    sutermPercentage: 0, //pago de suterm menos el 10%
    kmPay: 0, //pago $0.25 por km recorrido
    transportPay: 0, //pago de acarreo a suterm menos el 10% será de 485.10
    rateDifference: 0, //diferencia de tarifa(3)
    materialBank: 0, //material (costo bancos)
    pavementPrice: 0, //precio de km en pavimento
    dirtRoadPrice: 0, // precio de km en terracería
    totalKmPrice: 0, // El costo total de los kilometros ingresados mas los iniciales
    utility: 0, //utilidad
    totalUtility: 0, //Suma de las ganancias totales en general (incluye la suma de 10% acarreo, 0.25 por km, diferencia de tarifa y la utilidad.)
  });

  // Queda pendiente obtener exactamente el porcentaje del pago de acarreo de materiales

  const handleShowTable = () => setShowTable(!showTable);

  const getTotalPrice = (price, cubicMeters) => price * cubicMeters;

  const getKmPay = (k, m) => 0.25 * k * m;

  const getSutermPercentage = (m, price) => {
    const percentage = price * 0.1; //obetenemos el 10% del precio ctm
    const result = m * percentage;
    return result;
  };

  const getTotalCTM = (amount) => 566.61 * amount;

  const getTransportPay = (km, m3) => km * 7 * m3 * 0.9;

  const getRateDifference = (m, amount1, amount2, amount3) => {
    const totalValue = finalInfo.totalKmPrice * m;
    return totalValue - amount1 - amount2 - amount3; //amount1, amount2 y amount3 equivalen al 10% y 0.25 y el acarreo ctm que se restaran para obtener la diferencia de tarifa
  };

  const getMaterialBank = (m) => 110 * m;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const getUtility = (v1, v2, v3, v4, v5) =>
    finalInfo.totalPrice - v1 - v2 - v3 - v4 - v5;

  const getTotalUtility = (v1, v2, v3) => finalInfo.utility + v1 + v2 + v3;

  useEffect(() => {
    if (data.lengt !== 0) {
      console.log(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, finalInfo, setFinalInfo]);

  useEffect(() => {
    setFinalInfo((prevFinalInfo) => ({
      ...prevFinalInfo,
      totalPrice: getTotalPrice(data.price, data.cubicMeters),
      totalDistance:
        parseInt(data.pavementDistance) + parseInt(data.dirtRoadDistance) + 2,
      totalCTM: getTotalCTM(parseInt(data.cubicMeters)),
      kmPay: getKmPay(prevFinalInfo.totalDistance, parseInt(data.cubicMeters)),
      sutermPercentage: getSutermPercentage(
        parseInt(data.cubicMeters),
        prevFinalInfo.totalKmPrice
      ),
      transportPay: getTransportPay(
        prevFinalInfo.totalDistance,
        data.cubicMeters
      ),
      rateDifference: getRateDifference(
        parseInt(data.cubicMeters),
        prevFinalInfo.sutermPercentage,
        prevFinalInfo.kmPay,
        prevFinalInfo.transportPay
      ),
      materialBank: getMaterialBank(parseInt(data.cubicMeters)),
      utility: getUtility(
        prevFinalInfo.sutermPercentage,
        prevFinalInfo.kmPay,
        prevFinalInfo.transportPay,
        prevFinalInfo.rateDifference,
        prevFinalInfo.materialBank
      ),
      totalUtility: getTotalUtility(
        prevFinalInfo.sutermPercentage,
        prevFinalInfo.kmPay,
        prevFinalInfo.rateDifference
      ),
      pavementPrice: data.pavementDistance * 7.25,
      dirtRoadPrice: data.dirtRoadDistance * 11.91,
      totalKmPrice:
        prevFinalInfo.pavementPrice + prevFinalInfo.dirtRoadPrice + 41.58,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    data.cubicMeters,
    data.dirtRoadDistance,
    data.pavementDistance,
    finalInfo.totalPrice,
    finalInfo.totalDistance,
    data.dirtRoadDistance,
    data.pavementDistance,
    finalInfo.kmPay,
    finalInfo.sutermPercentage,
    finalInfo.totalCTM,
    finalInfo.transportPay,
    finalInfo.rateDifference,
    finalInfo.materialBank,
    finalInfo.pavementPrice,
    finalInfo.dirtRoadPrice,
    finalInfo.totalKmPrice,
    finalInfo.utility,
    finalInfo.totalUtility,
    data.price,
  ]);

  console.log("finalInfo", finalInfo);

  return (
    <section>
      <h1 className="my-8 text-center text-2xl font-bold">
        Conciliación de Materiales
      </h1>
      <form className="grid grid-cols-3 gap-20">
        <div>
          <Label>Sociedad</Label>
          <TextInput onChange={handleChange} type="text" name="company" />
        </div>
        <div>
          <Label>Material del concepto</Label>
          <TextInput onChange={handleChange} type="text" name="materialName" />
        </div>
        <div>
          <Label>Costo M3 &#40;Precio Unitario&#41;</Label>
          <TextInput onChange={handleChange} type="number" name="price" />
        </div>
        <div>
          <Label>Cantidad de M3 &#40;Metros cúbicos&#41;</Label>
          <TextInput onChange={handleChange} type="number" name="cubicMeters" />
        </div>
        <div>
          <Label>Km Pavimento</Label>
          <TextInput
            onChange={handleChange}
            type="number"
            name="pavementDistance"
          />
        </div>
        <div>
          <Label>Km Terracería</Label>
          <TextInput
            onChange={handleChange}
            type="number"
            name="dirtRoadDistance"
          />
        </div>
      </form>
      <div className="flex justify-center py-5 gap-20">
        <Button onClick={handleShowTable}>Agregar Concepto</Button>
        <Button color="dark">Crear PDF</Button>
      </div>
      <div>
        {showTable ? <ResultsTable data={data} finalInfo={finalInfo} /> : <></>}
      </div>
    </section>
  );
}
