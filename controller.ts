import axios from "axios";
import { Request, Response, NextFunction } from "express";

interface playerData {
  name: string;
  teamName: string;
  portrait: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}

export const allInformation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      "https://web-api.varzesh3.com/v1.0/football/teams/10/stats/goals?seasonId=900827"
      //   {
      //     headers: { apikey: "p1EEPUBuVVDXy0OWmNqI4v4J1dvBHH3v" },
      //   }
    );
    const playerData: playerData[] = response.data.players.map(
      (player: playerData) => ({
        name: player.name,
        teamName: player.teamName,
        portrate: player.portrait,
        goals: player.goals,
        assists: player.assists,
        yellowCard: player.yellowCards,
        redCard: player.redCards,
      })
    );

    res.json(playerData); // Send the complete playerData array
  } catch (error) {
    console.log(error);
  }
};

export const allInformation2 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      "https://web-api.varzesh3.com/v1.0/football/teams/10/stats/goals?seasonId=900827",
      {
        timeout: 1000,
        headers: { apikey: "p1EEPUBuVVDXy0OWmNqI4v4J1dvBHH3v" },
      }
    );

    const playerData: playerData[] = response.data.players.map(
      (player: playerData) => ({
        name: player.name,
        teamName: player.teamName,
        portrate: player.portrait,
        goals: player.goals,
        assists: player.assists,
        yellowCard: player.yellowCards,
        redCard: player.redCards,
      })
    );

    res.json(playerData); // Send the complete playerData array
  } catch (error) {
    console.log(error);
  }
};
