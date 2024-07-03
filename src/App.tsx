import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import TopNavigation from './components/TopNavigation';
import HomePage from './pages/homePage/HomePage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TopNavigation />
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
