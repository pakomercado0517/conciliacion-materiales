/* eslint-disable react/prop-types */
import { Table } from "flowbite-react";

export default function ResultsTable({ data, finalInfo }) {
  //funciónpara formatear los montos a mostrar en la tabla en $mxn
  const formatNumber = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  return (
    <section className="max-w-xl mt-8 mx-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Lugar de entrega</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-x max-w-sm">
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-bold whitespace-nowrap">
              Sociedad
            </Table.Cell>
            <Table.Cell className="bg-white">{data.company}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-bold whitespace-nowrap">
              Material
            </Table.Cell>
            <Table.Cell className="bg-white">{data.materialName}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-bold whitespace-nowrap">M3</Table.Cell>
            <Table.Cell className="bg-white">{data.cubicMeters}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            {" "}
            <Table.Cell className="font-bold whitespace-nowrap">
              P.U. Tecnint vendido por M3
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(data.price)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-bold whitespace-nowrap">
              Pago Total de Techint a CTM
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.totalPrice)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-bold whitespace-nowrap">
              10% acarreo sobre la tarifa SUTERM
            </Table.Cell>
            <Table.Cell className="">
              {formatNumber.format(finalInfo.sutermPercentage)}
            </Table.Cell>
            <Table.Cell className="text-center">Tuxpan</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-bold whitespace-nowrap">
              $0.25 x Km &#40;{finalInfo.totalDistance}&#41;
            </Table.Cell>
            <Table.Cell className="">
              {formatNumber.format(finalInfo.kmPay)}
            </Table.Cell>
            <Table.Cell className="text-center">Tuxpan</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-bold whitespace-nowrap">
              Pago acarreo a CTM
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.transportPay)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-bold whitespace-nowrap">
              Diferencia de Tarifa
            </Table.Cell>
            <Table.Cell className="">
              {formatNumber.format(finalInfo.rateDifference)}
            </Table.Cell>
            <Table.Cell className="text-center">Tuxpan</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            {" "}
            <Table.Cell className="font-bold whitespace-nowrap">
              Material &#40;Costo Bancos&#41;
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.materialBank)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-bold whitespace-nowrap">
              Utilidad
            </Table.Cell>
            <Table.Cell className="">
              {formatNumber.format(finalInfo.utility)}
            </Table.Cell>
            <Table.Cell className="text-center">Tuxpan</Table.Cell>
          </Table.Row>
          <Table.Row className="">
            <Table.Cell className="font-bold whitespace-nowrap"></Table.Cell>
            <Table.Cell className=""></Table.Cell>
            <Table.Cell className="text-center"></Table.Cell>
          </Table.Row>
          <Table.Row className="">
            <Table.Cell className="font-bold whitespace-nowrap">
              Suma de Ganancias totales en General:
            </Table.Cell>
            <Table.Cell className="">
              {formatNumber.format(finalInfo.totalUtility)}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </section>
  );
}
