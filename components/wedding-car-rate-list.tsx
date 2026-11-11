import { weddingCarRateSections } from "@/data/wedding-car-rates";

export function WeddingCarRateList() {
  return (
    <div className="space-y-10">
      {weddingCarRateSections.map((section) => (
        <section key={section.title} aria-labelledby={`rates-${section.title.toLowerCase().replaceAll(" ", "-")}`}>
          <h3
            id={`rates-${section.title.toLowerCase().replaceAll(" ", "-")}`}
            className="border-b border-[#E7E1D6] pb-4 text-2xl text-[#14283F]"
          >
            {section.title}
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full table-fixed border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-[#E7E1D6] text-[#657384]">
                  <th scope="col" className="w-[68%] px-3 py-3 font-semibold sm:px-5">Vehicle Name</th>
                  <th scope="col" className="w-[32%] px-3 py-3 font-semibold sm:px-5">Rental Price</th>
                </tr>
              </thead>
              <tbody>
                {section.vehicles.map((vehicle) => (
                  <tr key={vehicle.name} className="border-b border-[#E7E1D6] last:border-0">
                    <th scope="row" className="break-words px-3 py-3 text-left font-medium text-[#14283F] sm:px-5">
                      {vehicle.name}
                    </th>
                    <td className="break-words px-3 py-3 text-[#14283F] sm:px-5">{vehicle.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
