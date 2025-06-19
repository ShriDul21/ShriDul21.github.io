import { useLoading } from '../hooks/useLoading';
import Typewriter from './Typewriter';

export default function LoadingPage({ duration = 2000, children }) {
  const isLoading = useLoading(duration);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-purple-900 flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
            <Typewriter 
			  text="Loading!" 
			  speed={90} 
			  showCursor={false} 
			  className="text-white"
			/>
          </h1>
          <div className="w-32 h-1 bg-indigo-400 mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  return children;
}