import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "../components/card";

describe("Card", () => {
  it("renders children correctly", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>My Card</CardTitle>
          <CardDescription>A description</CardDescription>
        </CardHeader>
        <CardContent>Body text</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    expect(screen.getByText("My Card")).toBeInTheDocument();
    expect(screen.getByText("A description")).toBeInTheDocument();
    expect(screen.getByText("Body text")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("renders CardTitle as an h3 by default", () => {
    render(<CardTitle>Title</CardTitle>);
    expect(screen.getByRole("heading", { level: 3, name: "Title" })).toBeInTheDocument();
  });

  it("renders CardTitle as a custom element via asChild", () => {
    render(
      <CardTitle asChild>
        <h2>Custom heading</h2>
      </CardTitle>
    );
    expect(screen.getByRole("heading", { level: 2, name: "Custom heading" })).toBeInTheDocument();
  });
});
