
import { Layout } from "@/components/layout/Layout";

export default function SizeGuide() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Size Guide</h1>
        
        <div className="prose max-w-none">
          <p className="mb-8">
            Finding the right size for your child is important. Use our size charts below to help you choose the perfect fit. Measurements are in inches.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">T-Shirts & Tops</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Size</th>
                  <th className="border p-3 text-left">Age</th>
                  <th className="border p-3 text-left">Height</th>
                  <th className="border p-3 text-left">Chest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">2-3Y</td>
                  <td className="border p-3">2-3 years</td>
                  <td className="border p-3">36-38"</td>
                  <td className="border p-3">21-22"</td>
                </tr>
                <tr>
                  <td className="border p-3">4-5Y</td>
                  <td className="border p-3">4-5 years</td>
                  <td className="border p-3">39-43"</td>
                  <td className="border p-3">23-24"</td>
                </tr>
                <tr>
                  <td className="border p-3">6-7Y</td>
                  <td className="border p-3">6-7 years</td>
                  <td className="border p-3">44-48"</td>
                  <td className="border p-3">25-26"</td>
                </tr>
                <tr>
                  <td className="border p-3">8-9Y</td>
                  <td className="border p-3">8-9 years</td>
                  <td className="border p-3">49-53"</td>
                  <td className="border p-3">27-29"</td>
                </tr>
                <tr>
                  <td className="border p-3">10-11Y</td>
                  <td className="border p-3">10-11 years</td>
                  <td className="border p-3">54-57"</td>
                  <td className="border p-3">30-31"</td>
                </tr>
                <tr>
                  <td className="border p-3">12-13Y</td>
                  <td className="border p-3">12-13 years</td>
                  <td className="border p-3">58-61"</td>
                  <td className="border p-3">32-33"</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Pants & Jeans</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Size</th>
                  <th className="border p-3 text-left">Age</th>
                  <th className="border p-3 text-left">Waist</th>
                  <th className="border p-3 text-left">Hip</th>
                  <th className="border p-3 text-left">Inseam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">2-3Y</td>
                  <td className="border p-3">2-3 years</td>
                  <td className="border p-3">20-21"</td>
                  <td className="border p-3">21-22"</td>
                  <td className="border p-3">14-15"</td>
                </tr>
                <tr>
                  <td className="border p-3">4-5Y</td>
                  <td className="border p-3">4-5 years</td>
                  <td className="border p-3">21-22"</td>
                  <td className="border p-3">23-24"</td>
                  <td className="border p-3">16-18"</td>
                </tr>
                <tr>
                  <td className="border p-3">6-7Y</td>
                  <td className="border p-3">6-7 years</td>
                  <td className="border p-3">22-23"</td>
                  <td className="border p-3">25-26"</td>
                  <td className="border p-3">19-21"</td>
                </tr>
                <tr>
                  <td className="border p-3">8-9Y</td>
                  <td className="border p-3">8-9 years</td>
                  <td className="border p-3">23-24"</td>
                  <td className="border p-3">27-28"</td>
                  <td className="border p-3">22-24"</td>
                </tr>
                <tr>
                  <td className="border p-3">10-11Y</td>
                  <td className="border p-3">10-11 years</td>
                  <td className="border p-3">24-26"</td>
                  <td className="border p-3">29-30"</td>
                  <td className="border p-3">25-27"</td>
                </tr>
                <tr>
                  <td className="border p-3">12-13Y</td>
                  <td className="border p-3">12-13 years</td>
                  <td className="border p-3">26-28"</td>
                  <td className="border p-3">31-33"</td>
                  <td className="border p-3">28-30"</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Shoes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">US Size</th>
                  <th className="border p-3 text-left">UK Size</th>
                  <th className="border p-3 text-left">EU Size</th>
                  <th className="border p-3 text-left">Foot Length (in)</th>
                  <th className="border p-3 text-left">Age Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">10C</td>
                  <td className="border p-3">9</td>
                  <td className="border p-3">27</td>
                  <td className="border p-3">6.3"</td>
                  <td className="border p-3">3-4 years</td>
                </tr>
                <tr>
                  <td className="border p-3">11C</td>
                  <td className="border p-3">10</td>
                  <td className="border p-3">28</td>
                  <td className="border p-3">6.7"</td>
                  <td className="border p-3">4-5 years</td>
                </tr>
                <tr>
                  <td className="border p-3">12C</td>
                  <td className="border p-3">11</td>
                  <td className="border p-3">30</td>
                  <td className="border p-3">7"</td>
                  <td className="border p-3">5-6 years</td>
                </tr>
                <tr>
                  <td className="border p-3">13C</td>
                  <td className="border p-3">12</td>
                  <td className="border p-3">31</td>
                  <td className="border p-3">7.3"</td>
                  <td className="border p-3">6-7 years</td>
                </tr>
                <tr>
                  <td className="border p-3">1Y</td>
                  <td className="border p-3">13</td>
                  <td className="border p-3">32</td>
                  <td className="border p-3">7.7"</td>
                  <td className="border p-3">7-8 years</td>
                </tr>
                <tr>
                  <td className="border p-3">2Y</td>
                  <td className="border p-3">1</td>
                  <td className="border p-3">33</td>
                  <td className="border p-3">8"</td>
                  <td className="border p-3">8-9 years</td>
                </tr>
                <tr>
                  <td className="border p-3">3Y</td>
                  <td className="border p-3">2</td>
                  <td className="border p-3">34</td>
                  <td className="border p-3">8.3"</td>
                  <td className="border p-3">9-10 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How to Measure</h2>
          <p className="mb-4">
            For the most accurate measurements, use a soft measuring tape and measure directly against the body (not over clothes).
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2"><strong>Height:</strong> Measure from the top of the head to the bottom of the feet while standing straight.</li>
            <li className="mb-2"><strong>Chest:</strong> Measure around the fullest part of the chest, keeping the tape horizontal.</li>
            <li className="mb-2"><strong>Waist:</strong> Measure around the natural waistline.</li>
            <li className="mb-2"><strong>Hip:</strong> Measure around the fullest part of the hips.</li>
            <li><strong>Inseam:</strong> Measure from the crotch to the bottom of the ankle.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
