import { useState } from 'react';

import fechStandings from '../../helpers/get-data/get-data';

const useStandings = () => {
  const [standings, setStandings] = useState();
  const [competition, setCompetition] = useState();

  const handleSubmit = async (value) => {
    const data = await fechStandings(value);

    if (data.errorMessage) {
      alert(data.errorMessage);
      return null;
    }

    const getTotalType = (standings) => standings.type === 'TOTAL';
    const totalStandings = data?.standings?.filter(getTotalType);

    setStandings(totalStandings);
    setCompetition(data.competition);
  };

  return {
    standings,
    competition,
    handleSubmit,
  };
};

export default useStandings;
