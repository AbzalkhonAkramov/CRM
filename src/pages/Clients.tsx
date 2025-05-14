
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ClientTable } from '@/components/clients/ClientTable';
import { ClientForm } from '@/components/clients/ClientForm';
import { clients, Client } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Clients = () => {
  const [clientData, setClientData] = useState<Client[]>(clients);
  const [showForm, setShowForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | undefined>(undefined);
  const { toast } = useToast();
  
  // Handler for adding a new client
  const handleAddClient = (clientFormData: Omit<Client, 'id' | 'createdAt'>) => {
    // In a real app, this would make an API call
    const newClient: Client = {
      ...clientFormData,
      id: String(clientData.length + 1),
      createdAt: new Date().toISOString().split('T')[0],
    };
    
    setClientData([newClient, ...clientData]);
    setShowForm(false);
    
    toast({
      title: "Client Added",
      description: `${clientFormData.companyName} has been added successfully.`
    });
  };
  
  // Handler for updating an existing client
  const handleUpdateClient = (clientFormData: Omit<Client, 'id' | 'createdAt'>) => {
    if (!selectedClient) return;
    
    // In a real app, this would make an API call
    const updatedClients = clientData.map(client => 
      client.id === selectedClient.id 
        ? { ...client, ...clientFormData }
        : client
    );
    
    setClientData(updatedClients);
    setShowForm(false);
    setSelectedClient(undefined);
    
    toast({
      title: "Client Updated",
      description: `${clientFormData.companyName} has been updated successfully.`
    });
  };
  
  // Handler for deleting a client
  const handleDeleteClient = (id: string) => {
    // In a real app, this would make an API call
    // Here we're just filtering the client out of our local state
    if (confirm('Are you sure you want to delete this client?')) {
      const updatedClients = clientData.filter(client => client.id !== id);
      setClientData(updatedClients);
      
      toast({
        title: "Client Deleted",
        description: "The client has been deleted successfully."
      });
    }
  };
  
  // Handler for editing a client (opens the form)
  const handleEditClient = (client: Client) => {
    setSelectedClient(client);
    setShowForm(true);
  };
  
  // Handler for adding a new client (opens the form)
  const handleAddNewClient = () => {
    setSelectedClient(undefined);
    setShowForm(true);
  };
  
  // Handler for form submission
  const handleFormSubmit = (clientFormData: Omit<Client, 'id' | 'createdAt'>) => {
    if (selectedClient) {
      handleUpdateClient(clientFormData);
    } else {
      handleAddClient(clientFormData);
    }
  };
  
  // Handler for canceling the form
  const handleCancelForm = () => {
    setShowForm(false);
    setSelectedClient(undefined);
  };
  
  return (
    <Layout title="Clients">
      <ClientTable 
        clients={clientData}
        onEdit={handleEditClient}
        onDelete={handleDeleteClient}
        onAdd={handleAddNewClient}
      />
      
      {showForm && (
        <ClientForm 
          client={selectedClient}
          onSubmit={handleFormSubmit}
          onCancel={handleCancelForm}
        />
      )}
    </Layout>
  );
};

export default Clients;
