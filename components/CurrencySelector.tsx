import { useRouter } from 'next/router';
const currencies = require('@/data/currency.json');

type CurrencyData = {
  id: string;
  name: string;
}

interface ICurrencySelectorProps {
  selected: string | string[] | undefined,
  onChange?: any
}

const CurrencySelector: React.FC<ICurrencySelectorProps> = (props) => {
    const router = useRouter();

    return(
      <select 
        className="w-full md:w-auto my-8 px-2 py-2 rounded text-purple-700 dark:text-white text-xl dark:bg-purple-900"
        value={props.selected} onChange={(e) => {
          e.preventDefault();
          router.push(e.target.value);
        }}>
          <option value="">Select a currency</option>
          {currencies.data.sort((a: CurrencyData,b: CurrencyData) => { return a.name < b.name ? -1 : 1 }).map((c: CurrencyData) => {
            return (<option key={c.id} value={c.id}>{c.name}</option>)
          })}
      </select>
    )
}

export default CurrencySelector;