import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("Page /", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("affiche les colonnes et les taches chargees depuis /api/taches", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => [
        {
          id: 1,
          nom: "Preparer les materiaux",
          couleur: "FF0000",
          colonne: { id: 1, intitule: "A Faire" },
        },
        {
          id: 2,
          nom: "Assembler les pieces",
          couleur: "00FF00",
          colonne: { id: 2, intitule: "En cours" },
        },
      ],
    });

    render(<App />);

    expect(await screen.findByText("A Faire")).toBeTruthy();
    expect(await screen.findByText("En cours")).toBeTruthy();
    expect(await screen.findByText("Preparer les materiaux")).toBeTruthy();
    expect(await screen.findByText("Assembler les pieces")).toBeTruthy();
    expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/api/taches");
  });
});
