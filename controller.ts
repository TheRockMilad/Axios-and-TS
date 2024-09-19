import axios from "axios";
import { Request, Response, NextFunction } from "express";

interface playerData {
  name: string;
  teamName: string;
  portrait: string; // اصلاح "portrait"
  goals: number;
  assists: number;
  yellowCards: number; // اصلاح "yellowCards"
  redCards: number;    // اصلاح "redCards"
}

export const allInformation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await axios.get(
      "https://web-api.varzesh3.com/v1.0/football/teams/10/stats/goals?seasonId=900827"
    );
    const playerData: playerData[] = response.data.players.map(
      (player: any) => ({
        name: player.name,
        teamName: player.teamName,
        portrait: player.portrait, // اصلاح "portrait"
        goals: player.goals,
        assists: player.assists,
        yellowCards: player.yellowCards, // اصلاح "yellowCards"
        redCards: player.redCards,       // اصلاح "redCards"
      })
    );

    res.json(playerData); // Send the complete playerData array
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred'); // پاسخ در صورت خطا
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
      (player: any) => ({
        name: player.name,
        teamName: player.teamName,
        portrait: player.portrait, // اصلاح "portrait"
        goals: player.goals,
        assists: player.assists,
        yellowCards: player.yellowCards, // اصلاح "yellowCards"
        redCards: player.redCards,       // اصلاح "redCards"
      })
    );

    res.json(playerData); // Send the complete playerData array
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred'); // پاسخ در صورت خطا
  }
};
