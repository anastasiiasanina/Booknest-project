import { useState } from "react"

export const Fetching = (callback, err) => {
  const [loaded, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setLoading(false);
      await callback();
    } catch(e) {
      setError(err);
    } finally {
      setLoading(true);
    }
  }

  return [fetching, loaded, error];
}