import MultiUserForm from "../Components/MultiUserForm";
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

describe(`Tests for the multiplayer user forms`, () => {
    describe(`Tests for the first player user form on multiplayer`, () => {
        describe(`Tests for the name form`, () => {
            beforeEach(() => {
                render(<MultiUserForm />)
            });

            test(`Should render a player name input and label`, () => {
                expect(screen.getByPlaceholderText(`Enter your name...`)).toBeInTheDocument();
            });

            test(`Should not render a dropdown menu whilst name input is empty`, () => {
                const choiceForm = screen.queryByText(`Select...`)
                expect(choiceForm).toBeNull();
            });

            test(`Typing in the input field should update the value`, () => {
                const inputField = screen.getByPlaceholderText(`Enter your name...`);
                expect(inputField).toHaveValue(``);
                userEvent.type(inputField, `name`);
                expect(inputField).toHaveValue(`name`);
            });
        });

        describe(`Tests for the choices dropdown`, () => {
            beforeEach(() => {
                render(<MultiUserForm />);
                const inputField = screen.getByPlaceholderText(`Enter your name...`);
                userEvent.type(inputField, `name`);
            });

            test(`Should render a dropdown menu to make choice once a name is entered`, () => {
                expect(screen.getByDisplayValue(`Select...`)).toBeInTheDocument();
            });

            test(`Dropdown item should render with Select as a default option`, () => {
                const dropdownItem = screen.getByRole(`option`, { name: `Select...` });

                expect(dropdownItem.selected).toBe(true);
            });

            test(`Dropdown item should display the correct number of options`, () => {
                expect(screen.getAllByRole('option').length).toBe(4);
            });

            test(`The dropdown item should allow for the selected option to be changed`, () => {
                const listItem = screen.getByRole('combobox');
                const optionItem = screen.getByRole('option', { name: 'Rock' });

                userEvent.selectOptions(listItem, optionItem);
                expect(optionItem.selected).toBe(true);
            });
        });

        describe(`Tests for the form submission`, () => {
            beforeEach(() => {
                render(<MultiUserForm />);
                const inputField = screen.getByPlaceholderText(`Enter your name...`);
                userEvent.type(inputField, `name`);
                const listItem = screen.getByRole('combobox');
                const optionItem = screen.getByRole('option', { name: 'Rock' });
                userEvent.selectOptions(listItem, optionItem);
            });

            test(`Test that the submit button becomes enabled`, () => {
                expect(screen.getByText('Submit')).not.toBeDisabled();
            });
        });
    });

    describe(`Tests for the second player user form on multiplayer`, () => {
        describe(`Tests for the name form`, () => {
            beforeEach(() => {
                render(<MultiUserForm />);
                const inputField = screen.getByPlaceholderText(`Enter your name...`);
                userEvent.type(inputField, `name`);
                const listItem = screen.getByRole('combobox');
                const optionItem = screen.getByRole('option', { name: 'Rock' });
                userEvent.selectOptions(listItem, optionItem);
                userEvent.click(screen.getByText('Submit'));
            });

            test(`Should render a player name input and label`, () => {
                expect(screen.getAllByPlaceholderText(`Enter your name...`).length).toBe(2);
            });

            test(`Should not render a dropdown menu whilst name input is empty`, () => {
                const choiceForm = screen.queryByText(`Select...`)
                expect(choiceForm).toBeNull();
            });

            test(`Typing in the input field should update the value`, () => {
                const inputFields = screen.getAllByPlaceholderText(`Enter your name...`);
                expect(inputFields[1]).toHaveValue(``);
                userEvent.type(inputFields[1], `name`);
                expect(inputFields[1]).toHaveValue(`name`);
            });
        });

        describe(`Tests for the choices dropdown`, () => {
            beforeEach(() => {
                render(<MultiUserForm />);
                const inputField = screen.getByPlaceholderText(`Enter your name...`);
                userEvent.type(inputField, `name`);
                const listItem = screen.getByRole('combobox');
                const optionItem = screen.getByRole('option', { name: 'Rock' });
                userEvent.selectOptions(listItem, optionItem);
                userEvent.click(screen.getByText('Submit'));
                const inputFields = screen.getAllByPlaceholderText(`Enter your name...`);
                userEvent.type(inputFields[1], `name`);
            });

            test(`Should render a dropdown menu to make choice once a name is entered`, () => {
                expect(screen.getByDisplayValue(`Select...`)).toBeInTheDocument();
            });

            test(`Dropdown item should render with Select as a default option`, () => {
                const dropdownItem = screen.getByRole(`option`, { name: `Select...` });

                expect(dropdownItem.selected).toBe(true);
            });

            test(`Dropdown item should display the correct number of options`, () => {
                expect(screen.getAllByRole('option').length).toBe(4);
            });

            test(`The dropdown item should allow for the selected option to be changed`, () => {
                const listItem = screen.getByRole('combobox');
                const optionItem = screen.getByRole('option', { name: 'Rock' });

                userEvent.selectOptions(listItem, optionItem);
                expect(optionItem.selected).toBe(true);
            });
        });

        describe(`Tests for the form submission`, () => {
            beforeEach(() => {
                render(<MultiUserForm />);
                const inputField = screen.getByPlaceholderText(`Enter your name...`);
                userEvent.type(inputField, `name`);
                const listItem = screen.getByRole('combobox');
                const optionItem = screen.getByRole('option', { name: 'Rock' });
                userEvent.selectOptions(listItem, optionItem);
                userEvent.click(screen.getByText('Submit'));
                const inputFields = screen.getAllByPlaceholderText(`Enter your name...`);
                userEvent.type(inputFields[1], `name`);
                const newListItem = screen.getByRole('combobox');
                const newOptionItem = screen.getByRole('option', { name: 'Rock' });
                userEvent.selectOptions(newListItem, newOptionItem);
            });

            test(`Test that the submit button becomes enabled`, () => {
                const buttons = screen.getAllByText('Submit');
                expect(buttons[0]).toBeDisabled();
                expect(buttons[1]).not.toBeDisabled();
            });
        });
    });
});