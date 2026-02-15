import { useState, useEffect } from 'react';

type Currency = 'inr' | 'usd';

export function useCurrencyDetection() {
  const [currency, setCurrency] = useState<Currency>('usd');
  const [isLoading, setIsLoading] = useState(true);
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        const response = await fetch('/api/detect-currency', { cache: 'no-store' });
        const data = await response.json();
        setCurrency(data.currency);
      } catch (error) {
        console.error('Failed to detect currency:', error);
        setCurrency('usd');
      } finally {
        setIsLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    setManualOverride(true);
  };

  return {
    currency,
    setCurrency: handleCurrencyChange,
    isLoading,
    manualOverride,
  };
}
