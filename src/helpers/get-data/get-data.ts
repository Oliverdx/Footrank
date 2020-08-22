import validateError from '../validade-errors/validate-errors';

const TOKEN = '206118cb87914bb0a1d0b287c636a84a';
const FOOTBALL_API = 'http://api.football-data.org/v2/';

const fechStandings = async (id: String) => {

  const header = new Headers({
    'X-Auth-Token': TOKEN,
  });
  const standingsUrl = `${FOOTBALL_API}competitions/${id}/standings`;

  try {
    const data = await fetch(standingsUrl, { headers: header });
    const response = await data.json();

    if (!data.ok) {
      return validateError(data);
    }


    return response;

  } catch (error) {
    return validateError({ status: 503 });
  }

}

export default fechStandings;
