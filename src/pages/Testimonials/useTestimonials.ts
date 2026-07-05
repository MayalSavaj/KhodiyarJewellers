
export default function useTestimonials() {

    const CARDS = [
        { initials: 'RS', name: 'Rajan Shah', role: 'Director, Shah Jewels · Ahmedabad', mark: '\u201cThe one question we never have to ask again.\u201d', quote: 'We have sourced from Khodiyar for eleven years. The one thing that has never changed is consistency. When a piece leaves their atelier, it is as it was described. That is a rarer quality than most hallmarks.' },
        { initials: 'KN', name: 'Kavitha Nair', role: 'Proprietor, Nair Gold House · Bangalore', mark: '\u201cOur customers ask which atelier made this.\u201d', quote: 'The finishing on a Khodiyar piece is immediately recognisable on the counter. We have had customers come back specifically asking for the maison that made the previous piece. That word of mouth has real value to a retailer.' },
        { initials: 'PM', name: 'Priya Mehta', role: 'Founder, PM Bridal · Dubai', mark: '\u201cThey shipped correctly. First time, every time.\u201d', quote: 'We operate from Dubai, which means documentation, custom pieces, and international logistics have to be flawless. Khodiyar has not once sent us a piece that did not match its paperwork or its CAD. In five years of orders.' },
        { initials: 'AN', name: 'Arjun Narayanan', role: 'MD, Narayanan Exports · Chennai', mark: '\u201cA manufacturer that reads the room.\u201d', quote: 'They understood the South Indian market before we asked. Temple pieces arrived with correct measurements for traditional wearers. Polki sets were weighted appropriately. No correction calls — they simply knew.' },
        { initials: 'SL', name: 'Sunita Lakhani', role: 'Owner, SL Gold · New Jersey', mark: '\u201cNo one else picks up that fast.\u201d', quote: 'From an NRI retail context, responsiveness is everything. A client asks a question, I need to answer within minutes. The Khodiyar trade desk is available on WhatsApp, responds within the hour, and sends spec sheets unprompted. I have never once had to follow up twice.' },
        { initials: 'MB', name: 'Mihail Balan', role: 'Buyer, Gold Street · Bucharest', mark: '\u201cWe did not expect the European standard from Zaveri Bazaar.\u201d', quote: 'Our customers expect clarity on purity. Khodiyar\'s certificates and hallmark documentation stood up to our import authority\u2019s audit without a single question. The quality and paperwork match. For a new market, that was the decisive factor.' },
    ];

    const VIDEO_TESTIS = [
        { img: 'photo-1535632066927-ab7c9ab60908', name: 'Meera Patel', role: 'Mumbai Retailer' },
        { img: 'photo-1611652022419-a9419f74343d', name: 'Suresh Desai', role: 'Surat Wholesaler' },
        { img: 'photo-1605100804763-247f67b3557e', name: 'Kavitha Nair', role: 'Bangalore Boutique' },
        { img: 'photo-1573408301185-9146fe634ad0', name: 'Arjun Narayanan', role: 'Chennai Exporter' },
    ];

    return {
        VIDEO_TESTIS,
        CARDS
    }
}
