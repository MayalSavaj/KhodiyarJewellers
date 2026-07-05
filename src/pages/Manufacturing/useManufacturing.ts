export default function useManufacturing() {

    const PROCESS = [
        {
            num: 'Stage One · 01', title: 'Design & CAD.',
            img: 'photo-1607344645866-009c320b63e0',
            body: ['Each piece begins as a paper sketch, then a CAD render. Our designers work with karigars from day one, so a drawing always anticipates the bench. A 3D wax is printed and approved before any gold is melted.', 'Bespoke pieces are sketched alongside the client; trade pieces are interpreted from the maison archive.'],
        },
        {
            num: 'Stage Two · 02', title: 'Casting & moulding.',
            img: 'photo-1605100804763-247f67b3557e',
            body: ['Approved wax patterns are invested, burnt out and replaced with molten 22- or 18-karat gold under vacuum. Casting is performed on Italian centrifuges — calibrated weekly, supervised by a senior partner.', 'Every melt is reconciled to the milligram against the incoming bullion lot.'],
        },
        {
            num: 'Stage Three · 03', title: 'Setting & karigar work.',
            img: 'photo-1599643478518-a784e5dc4c8f',
            body: ['This is the slow floor. Master setters work by daylight under loupe — kundan, polki, jadau and pavé settings are still placed by hand, in the discipline taught at our benches for three generations.', 'An average bridal piece sits with a single setter for between four and twelve days.'],
        },
        {
            num: 'Stage Four · 04', title: 'Finishing & polishing.',
            img: 'photo-1633293048312-1844f262e9c5',
            body: ['After setting, pieces move to the finishing floor — rhodium and 24K plating baths, tumbling, hand-burnishing and engraving. Each surface is signed off by the floor master before assay.', 'A single bangle may pass through seven hands here.'],
        },
        {
            num: 'Stage Five · 05', title: 'Assay & hallmark.',
            img: 'photo-1605648916361-9bc12ad6a569',
            body: ['Finished pieces are weighed, marked and then sent to our in-house BIS-licensed assay chamber. The result is a permanent karat stamp — and a written certificate that travels with the piece for life.', 'No piece is dispatched without the signature of a senior partner.'],
        },
    ];
    return {
        PROCESS
    };
}
