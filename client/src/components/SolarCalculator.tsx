import { useState } from 'react';
import { MessageCircle, RotateCcw } from 'lucide-react';
import { SOLAR_CALCULATOR, COMPANY } from '@/constants/company';

export default function SolarCalculator() {
  const [inputType, setInputType] = useState<'bill' | 'consumption'>('bill');
  const [billValue, setBillValue] = useState<number>(300);
  const [consumption, setConsumption] = useState<number>(300);
  const [tariff, setTariff] = useState<number>(SOLAR_CALCULATOR.defaultTariff);

  // Calculate values
  const getConsumption = () => {
    if (inputType === 'bill') {
      return SOLAR_CALCULATOR.formulas.billToConsumption(billValue, tariff);
    }
    return consumption;
  };

  const consumptionKwh = getConsumption();
  const systemPower = SOLAR_CALCULATOR.formulas.systemPower(consumptionKwh);
  const requiredArea = SOLAR_CALCULATOR.formulas.requiredArea(systemPower);
  const billForSavings = inputType === 'bill' ? billValue : consumptionKwh * tariff;
  const monthlySavings = SOLAR_CALCULATOR.formulas.monthlySavings(billForSavings);
  const annualSavings = SOLAR_CALCULATOR.formulas.annualSavings(monthlySavings);
  const savingsIn25Years = SOLAR_CALCULATOR.formulas.savingsIn25Years(annualSavings);

  const handleReset = () => {
    setBillValue(300);
    setConsumption(300);
    setTariff(SOLAR_CALCULATOR.defaultTariff);
    setInputType('bill');
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatNumber = (value: number, decimals = 2) => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <section id="calculator" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculadora Solar Inteligente
          </h2>
          <p className="text-lg text-gray-600">
            Descubra quanto você pode economizar com energia solar
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl shadow-xl p-8 md:p-12 animate-fadeInUp">
          {/* Input Type Selector */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Como você prefere informar?
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => setInputType('bill')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                  inputType === 'bill'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
                }`}
              >
                Valor da Conta (R$)
              </button>
              <button
                onClick={() => setInputType('consumption')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                  inputType === 'consumption'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
                }`}
              >
                Consumo (kWh)
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {inputType === 'bill' ? (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Valor médio da conta de energia (R$)
                </label>
                <input
                  type="number"
                  value={billValue}
                  onChange={(e) => setBillValue(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="300"
                  min="0"
                />
                <p className="text-xs text-gray-600 mt-1">Valor mensal médio</p>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Consumo médio mensal (kWh)
                </label>
                <input
                  type="number"
                  value={consumption}
                  onChange={(e) => setConsumption(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="300"
                  min="0"
                />
                <p className="text-xs text-gray-600 mt-1">Consumo mensal em kWh</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tarifa de energia (R$/kWh)
              </label>
              <input
                type="number"
                value={tariff}
                onChange={(e) => setTariff(Math.max(0.1, parseFloat(e.target.value) || SOLAR_CALCULATOR.defaultTariff))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="1.00"
                min="0.1"
                step="0.01"
              />
              <p className="text-xs text-gray-600 mt-1">Tarifa média da sua região</p>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-sm text-gray-600 font-semibold mb-1">Consumo Estimado</p>
              <p className="text-3xl font-bold text-blue-600">{formatNumber(consumptionKwh, 0)} kWh</p>
              <p className="text-xs text-gray-500 mt-1">por mês</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-sm text-gray-600 font-semibold mb-1">Sistema Recomendado</p>
              <p className="text-3xl font-bold text-blue-600">{formatNumber(systemPower, 2)} kWp</p>
              <p className="text-xs text-gray-500 mt-1">potência instalada</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-sm text-gray-600 font-semibold mb-1">Área Necessária</p>
              <p className="text-3xl font-bold text-blue-600">{formatNumber(requiredArea, 1)} m²</p>
              <p className="text-xs text-gray-500 mt-1">aproximadamente</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-sm text-gray-600 font-semibold mb-1">Economia Mensal</p>
              <p className="text-3xl font-bold text-green-600">{formatCurrency(monthlySavings)}</p>
              <p className="text-xs text-gray-500 mt-1">95% de economia</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-sm text-gray-600 font-semibold mb-1">Economia Anual</p>
              <p className="text-3xl font-bold text-green-600">{formatCurrency(annualSavings)}</p>
              <p className="text-xs text-gray-500 mt-1">por ano</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-sm text-gray-600 font-semibold mb-1">Economia em 25 Anos</p>
              <p className="text-3xl font-bold text-green-600">{formatCurrency(savingsIn25Years)}</p>
              <p className="text-xs text-gray-500 mt-1">vida útil do sistema</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded mb-8">
            <p className="text-sm text-blue-900">
              <strong>Nota importante:</strong> Os resultados apresentados são estimativas. Um projeto técnico poderá fornecer valores ainda mais precisos.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={COMPANY.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <MessageCircle size={20} />
              <span>Solicitar Projeto Solar</span>
            </a>
            <button
              onClick={handleReset}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              <RotateCcw size={20} />
              <span>Resetar Valores</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
