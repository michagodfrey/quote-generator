import { useState, useEffect } from "react";

interface Quote {
  text: string;
  author: string;
}

function QuoteBox() {
  const [quote, setQuote] = useState<Quote>({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(false);

  const generateQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/quote");
      const data = await response.json();
      if (data && data.length > 0) {
        const newQuote = {
          text: data[0].q,
          author: data[0].a,
        };
        setQuote(newQuote);
      }
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Use useEffect to fetch a quote when the component mounts
  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
      <div className="min-h-[120px] flex items-center justify-center">
        {isLoading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        ) : (
          <blockquote className="text-center">
            <p className="text-xl mb-4">"{quote.text}"</p>
            <footer className="text-gray-600">- {quote.author}</footer>
          </blockquote>
        )}
      </div>
      <button
        onClick={generateQuote}
        className="mt-6 w-full bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded transition-colors"
        disabled={isLoading}
      >
        Generate Quote
      </button>
    </div>
  );
}

export default QuoteBox;
